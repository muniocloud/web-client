import { Component, output } from '@angular/core';
import { AudioRecorderService } from '@shared/services/audio-recorder.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { nextTick } from '@src/app/shared/utils/next-tick';

@Component({
  selector: 'app-audio-recorder',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './audio-recorder.component.html',
  styleUrl: './audio-recorder.component.scss'
})
export class AudioRecorderComponent {
  onReady = output();

  constructor(
    private audioRecorder: AudioRecorderService,
  ) {
  }

  getRecordingTime() {
    return this.audioRecorder.recordingTime;
  }

  getRecordedData() {
    return this.audioRecorder.recordedData;
  }

  isRecording() {
    return this.audioRecorder.isRecording();
  }

  stopRecording() {
    this.audioRecorder.stopRecording();
  }

  startRecording() {
    this.audioRecorder.startRecording();
  }

  ngAfterViewInit() {
    nextTick(() => {
      this.onReady.emit();
    });
  }
}
