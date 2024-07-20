import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionResultComponent } from './session-result.component';

describe('SessionResultComponent', () => {
  let component: SessionResultComponent;
  let fixture: ComponentFixture<SessionResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessionResultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessionResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
