import { CommonModule } from '@angular/common';
import { Component, Input, ViewChild, output } from '@angular/core';
import { AudioRecorderComponent } from '@components/audio-recorder/audio-recorder.component';
import { RecordedData } from '@shared/services/audio-recorder.types';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lesson-view',
  standalone: true,
  imports: [CommonModule, AudioRecorderComponent],
  templateUrl: './lesson-view.component.html',
  styleUrl: './lesson-view.component.scss'
})
export class LessonViewComponent {
  @Input() phrase: string = '';
  onRecordAudio = output<RecordedData>();

  @ViewChild('audioRecorder') recorder!: AudioRecorderComponent;
  private recordedDataSubscription: Subscription | null = null;

  constructor() {
    setTimeout(() => {
      this.recordedDataSubscription = this.recorder.getRecordedData().subscribe(data => {
        this.onRecordAudio.emit(data);
      });
    }, 0);
  }

  ngOnDestroy() {
    this.recordedDataSubscription?.unsubscribe();
  }
}
