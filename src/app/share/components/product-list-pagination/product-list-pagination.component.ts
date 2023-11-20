import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
} from "@angular/core";
import { PAGINATION } from "@/app/share/constants";
import { TNumElementsPerPageOptions } from "@/app/share/types";

export type TChangePageAndOffsetProps = {
  page: number;
  offset: number;
};

@Component({
  selector: "app-product-list-pagination",
  templateUrl: "./product-list-pagination.component.html",
  styleUrls: ["./product-list-pagination.component.css"],
})
export class ProductListPaginationComponent implements OnChanges {
  @Input() searchTerm: string = "";
  @Input() totalElements: number = 0;
  @Input() currentPage: number = 0;
  @Input() currentOffset: number =
    PAGINATION.NUM_ELEMENTS_PER_PAGE_OPTIONS[2].value;

  @Output() changePageAndOffsetEmitter =
    new EventEmitter<TChangePageAndOffsetProps>();
  @Output() resetAllFilterEmitter = new EventEmitter();

  pageMin: number = 1;
  pageMax: number = 1;

  NUM_ELEMENTS_PER_PAGE_OPTIONS: TNumElementsPerPageOptions =
    PAGINATION.NUM_ELEMENTS_PER_PAGE_OPTIONS;

  ngOnChanges(changes: any) {
    if (changes.totalElements?.currentValue) {
      this.reCalculatePageMax();
    }

    if (changes.currentOffset?.currentValue) {
      this.currentOffset === changes.currentOffset.currentValue;
      this.reCalculatePageMax();
      this.changePage(this.pageMin);
    }
  }

  changePage(newPage: number) {
    if (newPage !== this.currentPage) {
      this.changePageAndOffsetEmitter.emit({
        page: newPage,
        offset: this.currentOffset,
      });
    }
  }

  changeOffset(event: any | number) {
    const newOffset = typeof event === "number" ? event : event.target.value;
    if (newOffset !== this.currentOffset) {
      this.changePageAndOffsetEmitter.emit({
        page: this.currentPage,
        offset: newOffset,
      });
    }
  }

  selectPage(pageNumb: number) {
    this.changePage(pageNumb);
  }

  nextPage() {
    if (this.currentPage < this.pageMax) {
      this.changePage(this.currentPage + 1);
    }
  }

  previousPage() {
    if (this.currentPage > this.pageMin) {
      this.changePage(this.currentPage - 1);
    }
  }

  firstPage() {
    if (this.currentPage !== 1) {
      this.changePage(1);
    }
  }

  lastPage() {
    if (this.currentPage < this.pageMax) {
      this.changePage(this.pageMax);
    }
  }

  reCalculatePageMax() {
    this.pageMax = Math.ceil(this.totalElements / this.currentOffset);
  }

  resetAllFilter() {
    this.resetAllFilterEmitter.emit();
  }
}
