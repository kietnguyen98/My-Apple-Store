import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CartItemQuantitySelectComponent } from "./cart-item-quantity-select.component";

describe("CartItemQuantitySelectComponent", () => {
  let component: CartItemQuantitySelectComponent;
  let fixture: ComponentFixture<CartItemQuantitySelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartItemQuantitySelectComponent],
    });
    fixture = TestBed.createComponent(CartItemQuantitySelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
