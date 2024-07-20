import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionCreatorComponent } from './session-creator.component';

describe('SessionCreatorComponent', () => {
  let component: SessionCreatorComponent;
  let fixture: ComponentFixture<SessionCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessionCreatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessionCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
