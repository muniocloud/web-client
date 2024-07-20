import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionProgressComponent } from './session-progress.component';

describe('SessionProgressComponent', () => {
  let component: SessionProgressComponent;
  let fixture: ComponentFixture<SessionProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessionProgressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessionProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
