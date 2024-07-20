import { Component, Input } from '@angular/core';
import { LessonStatus } from '@shared/types/types';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-session-progress',
  standalone: true,
  imports: [CommonModule, MatTooltipModule, RouterLink],
  templateUrl: './session-progress.component.html',
  styleUrl: './session-progress.component.scss'
})
export class SessionProgressComponent {
  @Input({ required: true }) lessonsStatus: LessonStatus[] = [];
  @Input({ required: true }) currentLessonId!: number;
  @Input({ required: true }) sessionId!: number;


  getLessonTooltipIndicator(lessonStatus: LessonStatus, isCurrent: boolean) {
    if (isCurrent) {
      return 'You are here';
    }

    if (lessonStatus.answered) {
      return 'Answered';
    }

    return 'Jump to this';
  }

  getLessonRouterLink(lessonId: number) {
    return `/sessions/${this.sessionId}/lessons/${lessonId}`;
  }
}
