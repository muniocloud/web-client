import { Component, Input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { Lesson } from '@src/app/pages/dashboard/sessions/session/session.types';

@Component({
  selector: 'app-session-progress',
  standalone: true,
  imports: [CommonModule, MatTooltipModule, RouterLink],
  templateUrl: './session-progress.component.html',
  styleUrl: './session-progress.component.scss'
})
export class SessionProgressComponent {
  @Input({ required: true }) lessons: Lesson[] = [];
  @Input({ required: true }) currentLessonId!: number;
  @Input({ required: true }) sessionId!: number;
  @Input({ required: true }) isRecording!: boolean;

  onClickLesson = output<number>();

  getLessonTooltipIndicator(lesson: Lesson, isCurrent: boolean) {
    if (isCurrent) {
      return 'You are here';
    }

    if (lesson.answered) {
      return 'Answered';
    }

    return 'Jump to this';
  }

  emitLessonClick(lessonId: number) {
    this.onClickLesson.emit(lessonId);
    return `/sessions/${this.sessionId}/lessons/${lessonId}`;
  }
}
