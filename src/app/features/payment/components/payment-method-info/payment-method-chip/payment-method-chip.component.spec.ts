import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PaymentMethodChipComponent } from "./payment-method-chip.component";

describe("PaymentMethodChipComponent", () => {
  let component: PaymentMethodChipComponent;
  let fixture: ComponentFixture<PaymentMethodChipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentMethodChipComponent],
    });
    fixture = TestBed.createComponent(PaymentMethodChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
