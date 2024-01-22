import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PaymentBagInfoPopupComponent } from "./payment-bag-info-popup.component";

describe("PaymentBagInfoPopupComponent", () => {
  let component: PaymentBagInfoPopupComponent;
  let fixture: ComponentFixture<PaymentBagInfoPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentBagInfoPopupComponent],
    });
    fixture = TestBed.createComponent(PaymentBagInfoPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
