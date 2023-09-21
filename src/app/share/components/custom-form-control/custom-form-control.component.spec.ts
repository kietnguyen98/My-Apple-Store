import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CustomFormControlComponent } from "./custom-form-control.component";

describe("CustomFormControlComponent", () => {
  let component: CustomFormControlComponent;
  let fixture: ComponentFixture<CustomFormControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomFormControlComponent],
    });
    fixture = TestBed.createComponent(CustomFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
