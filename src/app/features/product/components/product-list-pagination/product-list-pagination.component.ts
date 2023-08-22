import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  OnInit,
} from "@angular/core";
import { PAGINATION } from "@/constants";
import { TNumElementsPerPageOptions } from "@/types";

@Component({
  selector: "app-product-list-pagination",
  templateUrl: "./product-list-pagination.component.html",
  styleUrls: ["./product-list-pagination.component.css"],
})
export class ProductListPaginationComponent implements OnInit, OnChanges {
  @Input() totalElements: number = 0;
  @Output() changeCurrentPage = new EventEmitter<number>();
  @Output() changeNumElementsPerPage = new EventEmitter<number>();

  currentPage: number = 1;
  elementPerPage: number = PAGINATION.NUM_ELEMENTS_PER_PAGE_OPTIONS[0].value;
  pageMin: number = 1;
  pageMax: number = 1;
  elementsPerPageOptions: TNumElementsPerPageOptions =
    PAGINATION.NUM_ELEMENTS_PER_PAGE_OPTIONS;

  ngOnChanges(): void {
    this.updateOnProductsChange();
  }

  ngOnInit(): void {
    this.changeElementsPerPage(
      PAGINATION.NUM_ELEMENTS_PER_PAGE_OPTIONS[2].value
    );
  }

  selectPage(newPage: number) {
    if (newPage !== this.currentPage) {
      this.currentPage = newPage;
      this.changeCurrentPage.emit(newPage);
    }
  }

  nextPage() {
    if (this.currentPage < this.pageMax) {
      this.selectPage(this.currentPage + 1);
    }
  }

  previousPage() {
    if (this.currentPage > this.pageMin) {
      this.selectPage(this.currentPage - 1);
    }
  }

  changeElementsPerPage(event: any | number) {
    const newValue: number =
      typeof event === "number" ? event : event.target.value;
    this.elementPerPage = newValue;
    this.pageMax = Math.ceil(this.totalElements / this.elementPerPage);
    this.selectPage(this.pageMin);
    this.changeNumElementsPerPage.emit(newValue);
  }

  updateOnProductsChange() {
    this.pageMax = Math.ceil(this.totalElements / this.elementPerPage);
    this.selectPage(this.pageMin);
  }
}
