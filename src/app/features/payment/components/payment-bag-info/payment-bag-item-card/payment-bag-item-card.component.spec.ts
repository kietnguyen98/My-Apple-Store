import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PaymentBagItemCardComponent } from "./payment-bag-item-card.component";

describe("PaymentBagItemCardComponent", () => {
  let component: PaymentBagItemCardComponent;
  let fixture: ComponentFixture<PaymentBagItemCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentBagItemCardComponent],
    });
    fixture = TestBed.createComponent(PaymentBagItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
