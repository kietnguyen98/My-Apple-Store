import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PaymentMethodInfoComponent } from "./payment-method-info.component";

describe("PaymentMethodInfoComponent", () => {
  let component: PaymentMethodInfoComponent;
  let fixture: ComponentFixture<PaymentMethodInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentMethodInfoComponent],
    });
    fixture = TestBed.createComponent(PaymentMethodInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
