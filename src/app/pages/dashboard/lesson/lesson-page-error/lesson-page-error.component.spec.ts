import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonPageErrorComponent } from './lesson-page-error.component';

describe('LessonPageErrorComponent', () => {
  let component: LessonPageErrorComponent;
  let fixture: ComponentFixture<LessonPageErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LessonPageErrorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessonPageErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
