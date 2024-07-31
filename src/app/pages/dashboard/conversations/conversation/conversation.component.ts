import { Component, Inject, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WsService } from '@src/app/ws/ws.service';
import { Socket } from 'socket.io-client';
import { Conversation, ConversationFeedback, ConversationMessage } from './conversation.types';
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
import { MarkdownService } from '@src/app/markdown/markdown.service';
import { MatDividerModule } from '@angular/material/divider';
import { WS_CONVERSATION_STATUS } from './conversation.constants';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { isNullOrUndefined } from '@src/app/shared/utils/is-null-or-undefined';

@Component({
  selector: 'app-conversation',
  standalone: true,
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule,
    DashboardPageTitleComponent,
    AudioChatMessageComponent,
    AudioRecorderComponent,
    MatDividerModule,
    MatProgressBarModule,
  ],
  templateUrl: './conversation.component.html',
  styleUrl: './conversation.component.scss'
})
export class ConversationComponent {
  private socket: Socket | null = null;
  private conversationId: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  currentUser: User | null = null;
  isLoading: boolean = false;
  isProcessingConversation: boolean = false;
  isProcessingMessage: boolean = false;
  private pageError: string = '';

  conversation: Subject<Conversation> = new Subject<Conversation>();
  conversationFeedback: BehaviorSubject<ConversationFeedback | null> = new BehaviorSubject<ConversationFeedback | null>(null);
  conversationMessages: BehaviorSubject<ConversationMessage[]> = new BehaviorSubject<ConversationMessage[]>([]);
  completedMessages: Observable<ConversationMessage[]> | null = null;
  requestedUserMessage: BehaviorSubject<ConversationMessage | null> = new BehaviorSubject<ConversationMessage | null>(null);
  feedbackHTMLContent: string | null = null;

  @ViewChild('audioRecorder') recorder!: AudioRecorderComponent;
  private audioRecorderSubscription: Subscription | null = null;

  constructor(
    private readonly wsService: WsService,
    private route: ActivatedRoute,
    private http: HttpClient,
    private authService: AuthService,
    private markdownService: MarkdownService,
    @Inject(BASE_URL) private baseUrl: string,
  ) {
    this.subscribeConversationFeedback();
    this.subscribeCurrentUser();
    this.subscribeConversation();
    this.subscribeConversationId();
    this.subscribeRoute();
  }

  subscribeAudioRecorder() {
    this.audioRecorderSubscription?.unsubscribe();
    this.audioRecorderSubscription = this.recorder.getRecordedData().subscribe(async (data) => {
      const buffer = await data.data.arrayBuffer();
      this.socket?.emit('send', {
        conversationId: this.conversationId.value,
      }, {
        buffer,
        mimetype: data.data.type,
      });
    });
  }

  setupSocket(conversationId: number) {
    this.socket = this.wsService.createSocket(environment.conversationSocketIoEndpoint);
    this.socket.on('connect', () => {
      this.socket?.emit('setup', {
        conversationId
      });
    });

    this.socket.on('message', (data: ConversationMessage) => {
      this.conversationMessages.next([...this.conversationMessages.value, data]);
      this.requestedUserMessage.next(null);
      this.isProcessingMessage = false;
    });

    this.socket.on('request-message', (data: ConversationMessage) => {
      this.requestedUserMessage.next(data);
    });

    this.socket.on('status', (code: number, [data]: [ConversationFeedback]) => {
      switch(code) {
        case WS_CONVERSATION_STATUS.STARTED:
          this.isProcessingMessage = true;
          break;
        case WS_CONVERSATION_STATUS.FINISHED:
          this.requestedUserMessage.next(null);
          this.conversationFeedback.next(data);
          this.isProcessingConversation = false;
          break;
        case WS_CONVERSATION_STATUS.FINISHING:
          this.isProcessingConversation = true;
          break;
        case WS_CONVERSATION_STATUS.PROCESSING_MESSAGE:
          this.isProcessingMessage = true;
          break;
        default:
          break;
      }
    });
  }

  subscribeCurrentUser() {
    this.authService.getCurrentUser().subscribe((user) => {
      this.currentUser = user;
    });
  }

  subscribeConversationFeedback() {
    this.conversationFeedback.subscribe((data) => {
      if (data) {
        this.feedbackHTMLContent = this.markdownService.convertTextToHTML(data.feedback);
      }
    });
  }

  subscribeConversation() {
    this.conversation.subscribe((data) => {
      this.conversationMessages.next(data?.messages ?? []);

      if (data.feedback && !isNullOrUndefined(data.rating)) {
        this.conversationFeedback.next({
          feedback: data.feedback,
          rating: data.rating!,
        });
      }
    });

    this.completedMessages = this.conversationMessages.asObservable().pipe(
      map((data) => {
        return data?.filter((message) => {
          return !!message.audioUrl;
        }) ?? [];
      }));
  }

  subscribeConversationId() {
    this.conversationId.subscribe((id) => {
      if (id === 0) {
        return;
      }

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
            if (!data.id) {
              return;
            }
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
