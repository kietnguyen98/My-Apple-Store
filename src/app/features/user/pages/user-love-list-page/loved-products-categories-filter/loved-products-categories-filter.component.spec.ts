import { ComponentFixture, TestBed } from "@angular/core/testing";

import { LovedProductsCategoriesFilterComponent } from "./loved-products-categories-filter.component";

describe("LovedProductsCategoriesFilterComponent", () => {
  let component: LovedProductsCategoriesFilterComponent;
  let fixture: ComponentFixture<LovedProductsCategoriesFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LovedProductsCategoriesFilterComponent],
    });
    fixture = TestBed.createComponent(LovedProductsCategoriesFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
