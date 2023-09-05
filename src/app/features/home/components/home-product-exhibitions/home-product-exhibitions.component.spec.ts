import { ComponentFixture, TestBed } from "@angular/core/testing";

import { HomeProductExhibitionsComponent } from "./home-product-exhibitions.component";

describe("HomeProductExhibitionsComponent", () => {
  let component: HomeProductExhibitionsComponent;
  let fixture: ComponentFixture<HomeProductExhibitionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeProductExhibitionsComponent],
    });
    fixture = TestBed.createComponent(HomeProductExhibitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
