import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioVisualizerComponent } from './audio-visualizer.component';

describe('AudioVisualizerComponent', () => {
  let component: AudioVisualizerComponent;
  let fixture: ComponentFixture<AudioVisualizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AudioVisualizerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AudioVisualizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
