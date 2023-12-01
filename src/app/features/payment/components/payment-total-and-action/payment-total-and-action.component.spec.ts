import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PaymentTotalAndActionComponent } from "./payment-total-and-action.component";

describe("PaymentTotalAndActionComponent", () => {
  let component: PaymentTotalAndActionComponent;
  let fixture: ComponentFixture<PaymentTotalAndActionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentTotalAndActionComponent],
    });
    fixture = TestBed.createComponent(PaymentTotalAndActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
