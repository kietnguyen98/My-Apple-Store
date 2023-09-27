import { products } from "@/app/features/product/data/products.data";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { PATH } from "@/configs/routes";
import { RouteService } from "@/app/share/services/route.service";
import { TProducts } from "@/app/features/product/types";
@Component({
  selector: "app-home-flash-sale-products",
  templateUrl: "./home-flash-sale-products.component.html",
  styleUrls: ["./home-flash-sale-products.component.css"],
})
export class HomeFlashSaleProductsComponent implements OnInit, OnDestroy {
  products: TProducts = products.slice(0, 10);
  requestId: number | undefined;
  elementsX: Array<number> = [];
  previousTimeStamp: number = 0;
  slideSpeed = 0.075;
  PRODUCT_CARD_WIDTH: number = 240;
  PRODUCT_CARDS_GAP: number = 16;

  constructor(private routeService: RouteService) {}

  slowDownSlideSpeed() {
    this.slideSpeed = 0.025;
  }

  speedUpSlideSpeed() {
    this.slideSpeed = 0.1;
  }

  navigateToDetailProduct(productName: string) {
    this.routeService.navigateWithUrlOnly({
      path: [PATH.LIST_PRODUCTS, productName],
    });
  }

  ngOnInit(): void {
    const wrapperElement = document.getElementById(
      "flash-sale-products-card-wrapper"
    ) as HTMLElement;

    const listCardElements = wrapperElement.getElementsByClassName(
      "product-card"
    ) as HTMLCollectionOf<HTMLElement>;

    const getProductsAutoSlide = (timeStamp: number) => {
      if (this.previousTimeStamp === 0) {
        // this branch run once in the very first time
        // when the timeStamp === 0

        for (let element of listCardElements) {
          // init each element x position
          this.elementsX.push(0);

          // add event listener when hover the card
          element.addEventListener("mouseenter", () =>
            this.slowDownSlideSpeed()
          );

          element.addEventListener("mouseleave", () =>
            this.speedUpSlideSpeed()
          );
        }

        this.previousTimeStamp = timeStamp;
      }
      const elapsedTime = timeStamp - this.previousTimeStamp;
      this.previousTimeStamp = timeStamp;

      this.elementsX = this.elementsX.map((x, i) => {
        if (listCardElements[i].getBoundingClientRect().right < 0) {
          // reset position to the last position of the queue
          // if product card pass the left edge of the screen
          return (
            x +
            this.PRODUCT_CARD_WIDTH * listCardElements.length +
            this.PRODUCT_CARDS_GAP * (listCardElements.length - 1) +
            this.PRODUCT_CARDS_GAP
          );
        } else {
          return x - this.slideSpeed * elapsedTime;
        }
      });

      for (let i = 0; i < this.elementsX.length; i++) {
        listCardElements[
          i
        ].style.transform = `translateX(${this.elementsX[i]}px)`;
      }

      this.requestId = requestAnimationFrame(getProductsAutoSlide);
    };

    this.requestId = requestAnimationFrame(getProductsAutoSlide);
  }

  ngOnDestroy(): void {
    if (this.requestId) {
      cancelAnimationFrame(this.requestId);
    }
  }
}
