import { ComponentFixture, TestBed } from "@angular/core/testing";

import { HeaderNavigationBarComponent } from "./header-navigation-bar.component";

describe("HeaderNavigationBarComponent", () => {
  let component: HeaderNavigationBarComponent;
  let fixture: ComponentFixture<HeaderNavigationBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderNavigationBarComponent],
    });
    fixture = TestBed.createComponent(HeaderNavigationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
