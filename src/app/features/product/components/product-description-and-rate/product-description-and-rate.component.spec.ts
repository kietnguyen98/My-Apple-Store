import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ProductDesciptionAndRateComponent } from "./product-description-and-rate.component";

describe("ProductDesciptionAndRateComponent", () => {
  let component: ProductDesciptionAndRateComponent;
  let fixture: ComponentFixture<ProductDesciptionAndRateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDesciptionAndRateComponent],
    });
    fixture = TestBed.createComponent(ProductDesciptionAndRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
