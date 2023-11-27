import { ComponentFixture, TestBed } from "@angular/core/testing";

import { HeaderUserNavigationMenuComponent } from "./header-user-navigation-menu.component";

describe("HeaderUserNavigationMenuComponent", () => {
  let component: HeaderUserNavigationMenuComponent;
  let fixture: ComponentFixture<HeaderUserNavigationMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderUserNavigationMenuComponent],
    });
    fixture = TestBed.createComponent(HeaderUserNavigationMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
