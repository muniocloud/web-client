import { Component, Input, computed } from '@angular/core';
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
  @Input() width: string = '24px';
  @Input() height: string = '24px';

  avatarVariableStyles = computed(() => `--avatar-width: ${this.width}; --avatar-height: ${this.height}`);

  hasImageUrl() {
    return !!this.imageUrl;
  }

}
