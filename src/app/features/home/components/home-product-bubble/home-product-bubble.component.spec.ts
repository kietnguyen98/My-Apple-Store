import { ComponentFixture, TestBed } from "@angular/core/testing";

import { HomeProductBubbleComponent } from "./home-product-bubble.component";

describe("HomeProductBubbleComponent", () => {
  let component: HomeProductBubbleComponent;
  let fixture: ComponentFixture<HomeProductBubbleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeProductBubbleComponent],
    });
    fixture = TestBed.createComponent(HomeProductBubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
