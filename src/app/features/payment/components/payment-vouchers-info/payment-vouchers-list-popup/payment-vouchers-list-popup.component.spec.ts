import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PaymentVouchersListPopupComponent } from "./payment-vouchers-list-popup.component";

describe("PaymentVouchersListPopupComponent", () => {
  let component: PaymentVouchersListPopupComponent;
  let fixture: ComponentFixture<PaymentVouchersListPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentVouchersListPopupComponent],
    });
    fixture = TestBed.createComponent(PaymentVouchersListPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
