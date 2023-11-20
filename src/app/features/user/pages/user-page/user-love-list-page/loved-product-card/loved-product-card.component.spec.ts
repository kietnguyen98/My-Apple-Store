import { ComponentFixture, TestBed } from "@angular/core/testing";

import { LovedProductCardComponent } from "./loved-product-card.component";

describe("LovedProductCardComponent", () => {
  let component: LovedProductCardComponent;
  let fixture: ComponentFixture<LovedProductCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LovedProductCardComponent],
    });
    fixture = TestBed.createComponent(LovedProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
