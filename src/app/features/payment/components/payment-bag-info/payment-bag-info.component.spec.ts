import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PaymentBagInfoComponent } from "./payment-bag-info.component";

describe("PaymentBagInfoComponent", () => {
  let component: PaymentBagInfoComponent;
  let fixture: ComponentFixture<PaymentBagInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentBagInfoComponent],
    });
    fixture = TestBed.createComponent(PaymentBagInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
