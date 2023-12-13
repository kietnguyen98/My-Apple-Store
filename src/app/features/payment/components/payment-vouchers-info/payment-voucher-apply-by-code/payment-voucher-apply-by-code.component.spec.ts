import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PaymentVoucherApplyByCodeComponent } from "./payment-voucher-apply-by-code.component";

describe("PaymentVoucherApplyByCodeComponent", () => {
  let component: PaymentVoucherApplyByCodeComponent;
  let fixture: ComponentFixture<PaymentVoucherApplyByCodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentVoucherApplyByCodeComponent],
    });
    fixture = TestBed.createComponent(PaymentVoucherApplyByCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
