import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CartAlertDialogComponent } from "./alert-dialog.component";

describe("CartAlertDialogComponent", () => {
  let component: CartAlertDialogComponent;
  let fixture: ComponentFixture<CartAlertDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartAlertDialogComponent],
    });
    fixture = TestBed.createComponent(CartAlertDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
