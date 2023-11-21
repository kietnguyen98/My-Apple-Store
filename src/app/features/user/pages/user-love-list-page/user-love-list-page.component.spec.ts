import { ComponentFixture, TestBed } from "@angular/core/testing";

import { UserLoveListPageComponent } from "./user-love-list-page.component";

describe("UserLoveListPageComponent", () => {
  let component: UserLoveListPageComponent;
  let fixture: ComponentFixture<UserLoveListPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserLoveListPageComponent],
    });
    fixture = TestBed.createComponent(UserLoveListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
