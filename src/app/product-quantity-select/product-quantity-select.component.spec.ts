import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ProductQuantitySelectComponent } from "./product-quantity-select.component";

describe("ProductQuantitySelectComponent", () => {
  let component: ProductQuantitySelectComponent;
  let fixture: ComponentFixture<ProductQuantitySelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductQuantitySelectComponent],
    });
    fixture = TestBed.createComponent(ProductQuantitySelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
