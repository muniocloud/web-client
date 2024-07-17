import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import RecordRTC from 'recordrtc';
import { calculateDuration } from '../utils/duration';
import { RecordedData } from './audio-recorder.types';

@Injectable({
  providedIn: 'root',
})
export class AudioRecorderService {
  private recorder: RecordRTC | null = null;
  private stream: MediaStream | null = null;
  private startTime = 0;
  private interval: any = null;
  private errorSubject = new Subject<Error | null>();
  private timeSubject = new BehaviorSubject<string>('00:00');
  private dataSubject = new Subject<RecordedData>();
  private _isRecording = false;

  get recordedData(): Observable<RecordedData> {
    return this.dataSubject.asObservable();
  }

  get recordingTime(): Observable<string> {
    return this.timeSubject.asObservable();
  }

  get recordingError(): Observable<Error | null> {
    return this.errorSubject.asObservable();
  }

  isRecording(): boolean {
    return this._isRecording;
  }

  startRecording() {
    if (this.recorder) {
      return;
    }

    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        this.stream = stream;
        this.errorSubject.next(null);
        this.record();
        this._isRecording = true;
      })
      .catch((error) => {
        this.errorSubject.next(error);
      });
  }

  private record() {
    if (!this.stream) {
      return;
    }

    this.recorder = new RecordRTC(this.stream, {
      type: 'audio',
      mimeType: 'audio/ogg',
    });

    this.recorder.startRecording();
    this.startTime = Date.now();
    this.createRecordingTimer();
  }

  private createRecordingTimer() {
    this.interval = setInterval(() => {
      const { minutes, seconds } = calculateDuration(this.startTime, Date.now());

      const minutesFormatted = minutes.toFixed(0).padStart(2, '0');
      const secondsFormatted = seconds.toFixed(0).padStart(2, '0');

      this.timeSubject.next(`${minutesFormatted}:${secondsFormatted}`);
    }, 500);
  }

  async stopRecording() {
    if (!this.recorder) {
      return;
    }

    this.recorder.stopRecording(async () => {
      const blob = this.recorder!.getBlob();
      const url = this.recorder!.toURL();
      this.dataSubject.next({
        data: blob,
        url
      });
      this.stopMedia();
    });
  }

  private stopMedia() {
    if (!this.recorder) {
      return;
    }

    this._isRecording = false;

    clearInterval(this.interval);
    this.recorder = null;
    this.startTime = 0;
    this.errorSubject.next(null);
    this.timeSubject.next('00:00');

    if (this.stream) {
      this.stream.getAudioTracks().forEach((track) => track.stop());
      this.stream = null;
    }
  }
}
