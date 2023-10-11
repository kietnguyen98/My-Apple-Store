import { ComponentFixture, TestBed } from "@angular/core/testing";

import { UserPurchasesPageComponent } from "./user-purchases-page.component";

describe("UserPurchasesPageComponent", () => {
  let component: UserPurchasesPageComponent;
  let fixture: ComponentFixture<UserPurchasesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserPurchasesPageComponent],
    });
    fixture = TestBed.createComponent(UserPurchasesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
