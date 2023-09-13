import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ProductSortByPricesComponent } from "./product-sort-by-prices.component";

describe("ProductSortByPricesComponent", () => {
  let component: ProductSortByPricesComponent;
  let fixture: ComponentFixture<ProductSortByPricesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductSortByPricesComponent],
    });
    fixture = TestBed.createComponent(ProductSortByPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
