import { ComponentFixture, TestBed } from "@angular/core/testing";

import { HomeCategoryShortcutComponent } from "./home-category-shortcut.component";

describe("HomeCategoryShortcutComponent", () => {
  let component: HomeCategoryShortcutComponent;
  let fixture: ComponentFixture<HomeCategoryShortcutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeCategoryShortcutComponent],
    });
    fixture = TestBed.createComponent(HomeCategoryShortcutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
