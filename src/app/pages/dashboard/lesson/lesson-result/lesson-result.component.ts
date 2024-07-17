import { Component, Input, output } from '@angular/core';
import { AnswerFeedback } from '../lesson.types';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { nextTick } from '../../../../shared/utils/next-tick';
import WaveSurfer from 'wavesurfer.js';
import { AudioViewerService } from '../../../../shared/services/audio-viewer.service';
import { RecordedData } from '../../../../shared/services/audio-recorder.types';
import { getTitle } from '../../../../shared/utils/feedback-title';

@Component({
  selector: 'app-lesson-result',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
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

  private audioViewerInstance: WaveSurfer | null = null;

  constructor(private readonly audioViewer: AudioViewerService) {
    nextTick(() => {
      this.audioViewerInstance = this.audioViewer.createAudioViewerInstance('#audioviewer', this.recordedData.url);
      this.feedbackTitle = getTitle(this.feedback.rating);
    });
  }

  toggleAudio() {
    this.audioViewerInstance?.playPause();
  }

  isPlayingAudio() {
    return this.audioViewerInstance?.isPlaying();
  }

  retryLesson() {
    this.onRetry.emit();
  }

  nextLesson() {
    this.onContinue.emit();
  }
}
