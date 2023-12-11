import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PaymentVoucherAppliedCardComponent } from "./payment-voucher-applied-card.component";

describe("PaymentVoucherAppliedCardComponent", () => {
  let component: PaymentVoucherAppliedCardComponent;
  let fixture: ComponentFixture<PaymentVoucherAppliedCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentVoucherAppliedCardComponent],
    });
    fixture = TestBed.createComponent(PaymentVoucherAppliedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
