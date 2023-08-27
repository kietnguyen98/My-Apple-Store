import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PageSectionNavigationComponent } from "./page-section-navigation.component";

describe("PageSectionNavigationComponent", () => {
  let component: PageSectionNavigationComponent;
  let fixture: ComponentFixture<PageSectionNavigationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageSectionNavigationComponent],
    });
    fixture = TestBed.createComponent(PageSectionNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
