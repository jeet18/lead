import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartviewComponent } from './smartview.component';

describe('SmartviewComponent', () => {
  let component: SmartviewComponent;
  let fixture: ComponentFixture<SmartviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
