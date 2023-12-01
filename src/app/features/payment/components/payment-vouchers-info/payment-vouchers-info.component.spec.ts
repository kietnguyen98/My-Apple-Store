import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PaymentVouchersInfoComponent } from "./payment-vouchers-info.component";

describe("PaymentVouchersInfoComponent", () => {
  let component: PaymentVouchersInfoComponent;
  let fixture: ComponentFixture<PaymentVouchersInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentVouchersInfoComponent],
    });
    fixture = TestBed.createComponent(PaymentVouchersInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
