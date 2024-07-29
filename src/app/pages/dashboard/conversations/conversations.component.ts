import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WsService } from '@src/app/ws/ws.service';
import { environment } from "@src/environments/environment";
import { Socket } from 'socket.io-client';

@Component({
  selector: 'app-conversations',
  standalone: true,
  imports: [],
  templateUrl: './conversations.component.html',
  styleUrl: './conversations.component.scss'
})
export class ConversationsComponent {
  private socket: Socket | null = null;

  constructor(
    private readonly wsService: WsService,
    private route: ActivatedRoute,
  ) {
    // this.socket = wsService.createSocket(environment.conversationSocketIoEndpoint);
    // this.socket.on('connect', () => {
    //   console.log('hii', this.socket.id);
    //   this.socket.emit('setup', {
    //     conversationId: 4,
    //   });
    //   this.socket.on('request-message', (data) => {
    //     console.log('requested', data);
    //   })
    // });
  }
}
