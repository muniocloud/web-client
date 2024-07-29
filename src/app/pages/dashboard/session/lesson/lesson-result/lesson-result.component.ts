import { Component, Input, output } from '@angular/core';
import { AnswerFeedback } from '../lesson.types';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { nextTick } from '@shared/utils/next-tick';
import { RecordedData } from '@shared/services/audio-recorder.types';
import { getTitle } from '@shared/utils/feedback-title';
import { AudioVisualizerComponent } from '@src/app/components/audio-visualizer/audio-visualizer.component';

@Component({
  selector: 'app-lesson-result',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, AudioVisualizerComponent],
  templateUrl: './lesson-result.component.html',
  styleUrl: './lesson-result.component.scss'
})
export class LessonResultComponent {
  @Input({ required: true }) feedback!: AnswerFeedback;
  @Input({ required: true }) recordedData!: RecordedData;
  @Input({ required: true }) phrase: string = '';

  feedbackTitle: string = '';

  onRetry = output();
  onContinue = output();

  constructor() {
    nextTick(() => {
      this.feedbackTitle = getTitle(this.feedback.rating);
    });
  }

  retryLesson() {
    this.onRetry.emit();
  }

  nextLesson() {
    this.onContinue.emit();
  }
}
