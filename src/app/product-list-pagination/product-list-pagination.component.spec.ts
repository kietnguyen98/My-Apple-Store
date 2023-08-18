import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ProductListPaginationComponent } from "./product-list-pagination.component";

describe("ProductListPaginationComponent", () => {
  let component: ProductListPaginationComponent;
  let fixture: ComponentFixture<ProductListPaginationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductListPaginationComponent],
    });
    fixture = TestBed.createComponent(ProductListPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
