import { ComponentFixture, TestBed } from "@angular/core/testing";

import { UserNavigateMenuComponent } from "./user-navigate-menu.component";

describe("UserNavigateMenuComponent", () => {
  let component: UserNavigateMenuComponent;
  let fixture: ComponentFixture<UserNavigateMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserNavigateMenuComponent],
    });
    fixture = TestBed.createComponent(UserNavigateMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
