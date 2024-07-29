import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioChatMessageComponent } from './audio-chat-message.component';

describe('AudioChatMessageComponent', () => {
  let component: AudioChatMessageComponent;
  let fixture: ComponentFixture<AudioChatMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AudioChatMessageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AudioChatMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
