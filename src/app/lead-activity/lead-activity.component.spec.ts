import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadActivityComponent } from './lead-activity.component';

describe('LeadActivityComponent', () => {
  let component: LeadActivityComponent;
  let fixture: ComponentFixture<LeadActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
