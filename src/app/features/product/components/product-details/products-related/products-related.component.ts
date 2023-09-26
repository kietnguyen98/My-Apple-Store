import { Component, Input } from "@angular/core";
import { TProducts } from "@/types";
@Component({
  selector: "app-products-related",
  templateUrl: "./products-related.component.html",
  styleUrls: ["./products-related.component.css"],
})
export class ProductsRelatedComponent {
  @Input() listProducts: TProducts = [];
  private ELEMENT_PER_SLIDE: number = 4;
  private currentSlide: number = 0;

  handleSlidePrevious() {
    this.currentSlide = this.currentSlide <= 0 ? 0 : this.currentSlide - 1;

    const element = document.getElementById(
      `related_product_${this.currentSlide * this.ELEMENT_PER_SLIDE}`
    );
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  }

  handleSlideNext() {
    this.currentSlide =
      this.currentSlide >=
      Math.floor(this.listProducts.length / this.ELEMENT_PER_SLIDE)
        ? Math.floor(this.listProducts.length / this.ELEMENT_PER_SLIDE)
        : this.currentSlide + 1;

    const element = document.getElementById(
      `related_product_${this.currentSlide * this.ELEMENT_PER_SLIDE}`
    );
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  }
}
