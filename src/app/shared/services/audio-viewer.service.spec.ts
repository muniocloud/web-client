import { TestBed } from '@angular/core/testing';

import { AudioViewerService } from './audio-viewer.service';

describe('AudioViewerService', () => {
  let service: AudioViewerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AudioViewerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
