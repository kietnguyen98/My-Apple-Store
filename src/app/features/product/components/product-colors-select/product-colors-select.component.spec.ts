import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ProductColorsSelectComponent } from "./product-colors-select.component";

describe("ProductColorsSelectComponent", () => {
  let component: ProductColorsSelectComponent;
  let fixture: ComponentFixture<ProductColorsSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductColorsSelectComponent],
    });
    fixture = TestBed.createComponent(ProductColorsSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
