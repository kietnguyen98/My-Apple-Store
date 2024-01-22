import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ItemQuantitySelectComponent } from "./item-quantity-select.component";

describe("ItemQuantitySelectComponent", () => {
  let component: ItemQuantitySelectComponent;
  let fixture: ComponentFixture<ItemQuantitySelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemQuantitySelectComponent],
    });
    fixture = TestBed.createComponent(ItemQuantitySelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
