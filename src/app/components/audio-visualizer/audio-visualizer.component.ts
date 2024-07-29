import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AudioViewerService } from '@src/app/shared/services/audio-viewer.service';
import { nextTick } from '@src/app/shared/utils/next-tick';
import WaveSurfer from 'wavesurfer.js';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-audio-visualizer',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './audio-visualizer.component.html',
  styleUrl: './audio-visualizer.component.scss'
})
export class AudioVisualizerComponent {
  @Input({ required: true }) audioUrl!: string;
  private audioViewerInstance: WaveSurfer | null = null;
  audioViewerId: string = `audio-${uuidv4().replaceAll('-', '').substring(0, 8)}`;

  constructor(private readonly audioViewer: AudioViewerService) {
    nextTick(() => {
      this.audioViewerInstance = this.audioViewer.createAudioViewerInstance(`#${this.audioViewerId}`, this.audioUrl);
    });
  }

  toggleAudio() {
    this.audioViewerInstance?.playPause();
  }

  isPlayingAudio() {
    return this.audioViewerInstance?.isPlaying();
  }
}
