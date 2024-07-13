import { Component, Input } from '@angular/core';
import { FirstLetterPipe } from './first-letter.pipe';
import { MatCardAvatar, MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [FirstLetterPipe, MatCardAvatar, MatCardModule],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss'
})
export class AvatarComponent {
  @Input({ required: false }) imageUrl: string | null = null;
  @Input({ required: true }) name: string = '';

  hasImageUrl() {
    return !!this.imageUrl;
  }
}
