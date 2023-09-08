import { ComponentFixture, TestBed } from "@angular/core/testing";

import { HomeFlashSaleProductsComponent } from "./home-flash-sale-products.component";

describe("HomeFlashSaleProductsComponent", () => {
  let component: HomeFlashSaleProductsComponent;
  let fixture: ComponentFixture<HomeFlashSaleProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeFlashSaleProductsComponent],
    });
    fixture = TestBed.createComponent(HomeFlashSaleProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
