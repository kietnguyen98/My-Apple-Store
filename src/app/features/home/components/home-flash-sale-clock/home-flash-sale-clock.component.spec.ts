import { ComponentFixture, TestBed } from "@angular/core/testing";

import { HomeFlashSaleClockComponent } from "./home-flash-sale-clock.component";

describe("HomeFlashSaleClockComponent", () => {
  let component: HomeFlashSaleClockComponent;
  let fixture: ComponentFixture<HomeFlashSaleClockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeFlashSaleClockComponent],
    });
    fixture = TestBed.createComponent(HomeFlashSaleClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
