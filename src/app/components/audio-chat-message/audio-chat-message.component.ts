import { Component, HostBinding, Input } from '@angular/core';
import { AutorInput } from './audio-chat-message.types';
import { User } from '@src/app/auth/auth.types';
import { AvatarComponent } from '../avatar/avatar.component';
import { AudioVisualizerComponent } from "../audio-visualizer/audio-visualizer.component";
import { FirstNamePipe } from '@shared/pipes/first-name.pipe';

@Component({
  selector: 'app-audio-chat-message',
  standalone: true,
  imports: [AvatarComponent, AudioVisualizerComponent, FirstNamePipe],
  templateUrl: './audio-chat-message.component.html',
  styleUrl: './audio-chat-message.component.scss'
})
export class AudioChatMessageComponent {
  @Input({ required: true }) audioUrl!: string;
  @HostBinding('class.is-owner')
  @Input({ required: true }) isOwner!: boolean;
  @Input({ required: true }) author!: User;
}
