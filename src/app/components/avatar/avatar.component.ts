import { Component, Input, computed } from '@angular/core';
import { FirstLetterPipe } from '../../shared/pipes/first-letter.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [FirstLetterPipe, CommonModule],
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
