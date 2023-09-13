import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ProductFilterPricesComponent } from "./product-filter-prices.component";

describe("ProductFilterPricesComponent", () => {
  let component: ProductFilterPricesComponent;
  let fixture: ComponentFixture<ProductFilterPricesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductFilterPricesComponent],
    });
    fixture = TestBed.createComponent(ProductFilterPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
