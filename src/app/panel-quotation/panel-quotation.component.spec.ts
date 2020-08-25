import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelQuotationComponent } from './panel-quotation.component';

describe('PanelQuotationComponent', () => {
  let component: PanelQuotationComponent;
  let fixture: ComponentFixture<PanelQuotationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelQuotationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelQuotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
