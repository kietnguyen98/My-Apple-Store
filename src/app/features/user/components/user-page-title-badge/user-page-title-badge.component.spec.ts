import { ComponentFixture, TestBed } from "@angular/core/testing";

import { UserPageTitleBadgeComponent } from "./user-page-title-badge.component";

describe("UserPageTitleBadgeComponent", () => {
  let component: UserPageTitleBadgeComponent;
  let fixture: ComponentFixture<UserPageTitleBadgeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserPageTitleBadgeComponent],
    });
    fixture = TestBed.createComponent(UserPageTitleBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
