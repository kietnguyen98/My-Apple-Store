import { ComponentFixture, TestBed } from "@angular/core/testing";

import { HomeFlashSaleComponent } from "./home-flash-sale.component";

describe("HomeFlashSaleComponent", () => {
  let component: HomeFlashSaleComponent;
  let fixture: ComponentFixture<HomeFlashSaleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeFlashSaleComponent],
    });
    fixture = TestBed.createComponent(HomeFlashSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
