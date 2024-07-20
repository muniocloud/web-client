import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonResultComponent } from './lesson-result.component';

describe('LessonResultComponent', () => {
  let component: LessonResultComponent;
  let fixture: ComponentFixture<LessonResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LessonResultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessonResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
