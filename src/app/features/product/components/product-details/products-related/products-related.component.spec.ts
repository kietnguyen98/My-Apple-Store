import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ProductsRelatedComponent } from "./products-related.component";

describe("ProductsRelatedComponent", () => {
  let component: ProductsRelatedComponent;
  let fixture: ComponentFixture<ProductsRelatedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsRelatedComponent],
    });
    fixture = TestBed.createComponent(ProductsRelatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
