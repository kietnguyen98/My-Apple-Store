import { ComponentFixture, TestBed } from "@angular/core/testing";

import { UserProfileInformationComponent } from "./user-profile-information.component";

describe("UserProfileInformationComponent", () => {
  let component: UserProfileInformationComponent;
  let fixture: ComponentFixture<UserProfileInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfileInformationComponent],
    });
    fixture = TestBed.createComponent(UserProfileInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
