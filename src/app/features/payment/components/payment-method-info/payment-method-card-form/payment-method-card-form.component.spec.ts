import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PaymentMethodCardFormComponent } from "./payment-method-card-form.component";

describe("PaymentMethodCardFormComponent", () => {
  let component: PaymentMethodCardFormComponent;
  let fixture: ComponentFixture<PaymentMethodCardFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentMethodCardFormComponent],
    });
    fixture = TestBed.createComponent(PaymentMethodCardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
