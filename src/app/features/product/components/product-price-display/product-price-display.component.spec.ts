import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ProductPriceDisplayComponent } from "./product-price-display.component";

describe("ProductPriceDisplayComponent", () => {
  let component: ProductPriceDisplayComponent;
  let fixture: ComponentFixture<ProductPriceDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductPriceDisplayComponent],
    });
    fixture = TestBed.createComponent(ProductPriceDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
