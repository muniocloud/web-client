import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import RecordRTC from 'recordrtc';

@Injectable({
  providedIn: 'root',
})
export class AudioRecordingService {
  private recorder: RecordRTC | null = null;
  private stream: MediaStream | null = null;
  private recordingTime = new Subject<string>();
  private recordingFailed = new Subject<boolean>();
  private startTime = 0;
  private interval: any = null;
  private recorded = new Subject<Blob>();
  private recordedUrl = new Subject<string>();

  getRecordedBlob(): Observable<Blob> {
    return this.recorded.asObservable();
  }

  getRecordedUrl(): Observable<string> {
    return this.recordedUrl.asObservable();
  }

  getRecordedTime(): Observable<string> {
    return this.recordingTime.asObservable();
  }

  isRecordingFailed(): Observable<boolean> {
    return this.recordingFailed.asObservable();
  }

  isRecording(): boolean {
    return !!this.stream && this.startTime > 0;
  }

  startRecording() {
    if (this.recorder) {
      return;
    }

    this.recordingTime.next('00:00');

    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((s) => {
        this.recordingFailed.next(false);
        this.stream = s;
        this.record();
      })
      .catch(() => {
        this.recordingFailed.next(true);
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

    this.interval = setInterval(() => {
      const now = Date.now();
      const diff = (now - this.startTime) / 1000;
      const minutes = Math.floor(diff / 60).toFixed(0);
      const seconds = (diff % 60).toFixed(0);
      this.recordingTime.next(`${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`);
    }, 500);
  }

  async stopRecording() {
    if (!this.recorder) {
      return;
    }

    this.recorder.stopRecording(async () => {
      const blob = this.recorder!.getBlob();
      this.recorded.next(blob);
      this.recordedUrl.next(this.recorder!.toURL());
      this.stopMedia();
    });
  }

  private stopMedia() {
    if (!this.recorder) {
      return;
    }

    this.recorder = null;
    clearInterval(this.interval);
    this.startTime = 0;
    if (this.stream) {
      this.stream.getAudioTracks().forEach((track) => track.stop());
      this.stream = null;
    }
  }
}
