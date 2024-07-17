import { Component, Input, output } from '@angular/core';
import { AnswerFeedback } from '../lesson.types';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { nextTick } from '../../../../shared/utils/next-tick';
import WaveSurfer from 'wavesurfer.js';
import { AudioViewerService } from '../../../../shared/services/audio-viewer.service';
import { RecordedData } from '../../../../shared/services/audio-recorder.types';

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

  onRetry = output();
  onContinue = output();

  private audioViewerInstance: WaveSurfer | null = null;

  constructor(private readonly audioViewer: AudioViewerService) {
    nextTick(() => {
      this.audioViewerInstance = this.audioViewer.createAudioViewerInstance('#audioviewer', this.recordedData.url);
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

  getAnswerTitle(rating: number) {
    if (rating <= 3) {
      return 'Let\'s try again?';
    }

    if (rating <= 5) {
      return 'Ok, we need to improve it!';
    }

    if (rating <= 8) {
      return 'Almost done!';
    }

    return 'You are good!';
  }
}
