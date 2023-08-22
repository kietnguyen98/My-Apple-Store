import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ProductMemoriesSelectComponent } from "./product-memories-select.component";

describe("ProductMemoriesSelectComponent", () => {
  let component: ProductMemoriesSelectComponent;
  let fixture: ComponentFixture<ProductMemoriesSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductMemoriesSelectComponent],
    });
    fixture = TestBed.createComponent(ProductMemoriesSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
