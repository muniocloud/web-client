import { Component, Inject, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WsService } from '@src/app/ws/ws.service';
import { Socket } from 'socket.io-client';
import { Conversation, ConversationMessage } from './conversation.types';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '@src/app/shared/providers/base-url.provider';
import { BehaviorSubject, finalize, map, Observable, Subject, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DashboardPageTitleComponent } from '@src/app/components/dashboard-page-title/dashboard-page-title.component';
import { AudioChatMessageComponent } from '@src/app/components/audio-chat-message/audio-chat-message.component';
import { AuthService } from '@src/app/auth/auth.service';
import { User } from '@src/app/auth/auth.types';
import { AudioRecorderComponent } from "../../../../components/audio-recorder/audio-recorder.component";
import { environment } from '@src/environments/environment';
import { nextTick } from '@src/app/shared/utils/next-tick';

@Component({
  selector: 'app-conversation',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule, MatButtonModule, MatIconModule, DashboardPageTitleComponent, AudioChatMessageComponent, AudioRecorderComponent],
  templateUrl: './conversation.component.html',
  styleUrl: './conversation.component.scss'
})
export class ConversationComponent {
  private socket: Socket | null = null;
  private conversationId: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  conversation: BehaviorSubject<Conversation | null> = new BehaviorSubject<Conversation | null>(null);
  conversationMessages: BehaviorSubject<ConversationMessage[]> = new BehaviorSubject<ConversationMessage[]>([]);
  completedMessages: Observable<ConversationMessage[]> | null = null;
  nextUserMessage: BehaviorSubject<ConversationMessage | null> = new BehaviorSubject<ConversationMessage | null>(null);
  currentUser: User | null = null;
  isLoading: boolean = false;
  private pageError: string = '';
  @ViewChild('audioRecorder') recorder!: AudioRecorderComponent;
  private audioRecorderSubscription: Subscription | null = null;

  constructor(
    private readonly wsService: WsService,
    private route: ActivatedRoute,
    private http: HttpClient,
    private authService: AuthService,
    @Inject(BASE_URL) private baseUrl: string,
  ) {
    this.subscribeCurrentUser();
    this.subscribeConversation();
    this.subscribeConversationId();
    this.subscribeRoute();
  }

  subscribeAudioRecorder() {
    this.nextUserMessage.subscribe((data) => {
      if (!data) {
        return;
      }

      nextTick(async () => {
        this.audioRecorderSubscription?.unsubscribe();
        this.audioRecorderSubscription = this.recorder.getRecordedData().subscribe(async (data) => {
          const buffer = await data.data.arrayBuffer();
          this.socket?.emit('send', {
            conversationId: this.conversationId.value,
            mimetype: data.data.type,
          }, buffer);
        });
      });
    });
  }

  setupSocket(conversationId: number) {
    this.socket = this.wsService.createSocket(environment.conversationSocketIoEndpoint);
    this.socket.on('connect', () => {
      this.socket?.emit('setup', {
        conversationId
      });
      this.subscribeAudioRecorder();
    });

    this.socket.on('message', (data: ConversationMessage) => {
      this.conversationMessages.next([...this.conversationMessages.value, data]);
    });

    this.socket.on('request-message', (data: ConversationMessage) => {
      this.nextUserMessage.next(data);
    });
  }

  subscribeCurrentUser() {
    this.authService.getCurrentUser().subscribe((user) => {
      this.currentUser = user;
    });
  }

  subscribeConversation() {
    this.conversation.subscribe((data) => {
      this.conversationMessages.next(data?.messages ?? []);
    });

    this.completedMessages = this.conversationMessages.asObservable().pipe(
      map((data) => {
        return data?.filter((message) => {
          return !!message.audioUrl;
      }) ?? [];
    }));

    this.conversationMessages.asObservable().pipe(
      map((data) => {
        let nextMessage = null;
        for (let message of data ?? []) {
          if (!message.audioUrl) {
            if (message.isUser) {
              nextMessage = message;
            }
            break;
          }
        }

        return nextMessage;
    }));
  }

  subscribeConversationId() {
    this.conversationId.subscribe((id) => {
      this.isLoading = true;
      this.setupSocket(id);
      this.http
      .get<Conversation>(`${this.baseUrl}/conversations/${id}`)
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe({
        next: (data) => {
          this.conversation.next(data);
        },
        error: (response: { status: number, statusText: string }) => {
          this.pageError = `${response.status} ${response.statusText}`;
        }
      });
    });
  }

  subscribeRoute() {
    this.route.paramMap.subscribe((params) => {
      this.conversationId.next(+params.get('conversationId')!);
    });
  }

  getMessageAuthorData(isUser: boolean) {
    if (isUser) {
      return this.currentUser!;
    }

    return {
      name: 'munio',
      avatarUrl: './munio.png',
    }
  }

  ngOnDestroy() {
    this.audioRecorderSubscription?.unsubscribe();
  }
}
