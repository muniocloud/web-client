import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackBtnComponent } from './feedback-btn.component';

describe('FeedbackBtnComponent', () => {
  let component: FeedbackBtnComponent;
  let fixture: ComponentFixture<FeedbackBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedbackBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbackBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
