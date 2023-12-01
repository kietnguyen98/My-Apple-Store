import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PaymentSectionHeaderBadgeComponent } from "./payment-section-header-badge.component";

describe("PaymentSectionHeaderBadgeComponent", () => {
  let component: PaymentSectionHeaderBadgeComponent;
  let fixture: ComponentFixture<PaymentSectionHeaderBadgeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentSectionHeaderBadgeComponent],
    });
    fixture = TestBed.createComponent(PaymentSectionHeaderBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
