import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPageTitleComponent } from './dashboard-page-title.component';

describe('DashboardPageTitleComponent', () => {
  let component: DashboardPageTitleComponent;
  let fixture: ComponentFixture<DashboardPageTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardPageTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardPageTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
