import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ProductSubImagesComponent } from "./product-sub-images.component";

describe("ProductSubImagesComponent", () => {
  let component: ProductSubImagesComponent;
  let fixture: ComponentFixture<ProductSubImagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductSubImagesComponent],
    });
    fixture = TestBed.createComponent(ProductSubImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
