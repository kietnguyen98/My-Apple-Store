import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PaymentUserInfoComponent } from "./payment-user-info.component";

describe("PaymentUserInfoComponent", () => {
  let component: PaymentUserInfoComponent;
  let fixture: ComponentFixture<PaymentUserInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentUserInfoComponent],
    });
    fixture = TestBed.createComponent(PaymentUserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
