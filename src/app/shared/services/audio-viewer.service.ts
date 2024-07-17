import { Injectable } from '@angular/core';
import WaveSurfer, { WaveSurferOptions } from 'wavesurfer.js';

@Injectable({
  providedIn: 'root'
})
export class AudioViewerService {

  constructor() { }

  createAudioViewerInstance(containerRef: string, url: string, options?: WaveSurferOptions) {
    return WaveSurfer.create({
      container: containerRef,
      waveColor: '#ffffff',
      progressColor: '#1e95f2',
      width: '100%',
      height: 48,
      barWidth: 2,
      url,
      ...options,
    })
  }
}
