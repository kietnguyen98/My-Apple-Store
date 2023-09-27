import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ProductFilterStatusComponent } from "./product-filter-status.component";

describe("ProductFilterStatusComponent", () => {
  let component: ProductFilterStatusComponent;
  let fixture: ComponentFixture<ProductFilterStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductFilterStatusComponent],
    });
    fixture = TestBed.createComponent(ProductFilterStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
