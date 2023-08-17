import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymetSuccessInvoiceComponent } from './paymet-success-invoice.component';

describe('PaymetSuccessInvoiceComponent', () => {
  let component: PaymetSuccessInvoiceComponent;
  let fixture: ComponentFixture<PaymetSuccessInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymetSuccessInvoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymetSuccessInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
