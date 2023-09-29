import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ProductHotBadgeComponent } from "./product-hot-badge.component";

describe("ProductHotBadgeComponent", () => {
  let component: ProductHotBadgeComponent;
  let fixture: ComponentFixture<ProductHotBadgeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductHotBadgeComponent],
    });
    fixture = TestBed.createComponent(ProductHotBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
