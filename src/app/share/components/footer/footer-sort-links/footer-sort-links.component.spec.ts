import { ComponentFixture, TestBed } from "@angular/core/testing";

import { FooterSortLinksComponent } from "./footer-sort-links.component";

describe("FooterSortLinksComponent", () => {
  let component: FooterSortLinksComponent;
  let fixture: ComponentFixture<FooterSortLinksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterSortLinksComponent],
    });
    fixture = TestBed.createComponent(FooterSortLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
