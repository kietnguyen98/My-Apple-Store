import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PaymentShippingInfoComponent } from "./payment-shipping-info.component";

describe("PaymentShippingInfoComponent", () => {
  let component: PaymentShippingInfoComponent;
  let fixture: ComponentFixture<PaymentShippingInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentShippingInfoComponent],
    });
    fixture = TestBed.createComponent(PaymentShippingInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
