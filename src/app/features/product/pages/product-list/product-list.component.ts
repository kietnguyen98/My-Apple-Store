import { Component, OnInit, OnDestroy } from "@angular/core";
import { TProducts } from "@/types";
import { COMPONENT_DIMENSIONS } from "@/constants";
import { ProductService } from "../../services/product.service";
import { scrollToTopImmediately } from "@/utilities/functions";
@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent implements OnInit, OnDestroy {
  // current list of products
  products: TProducts = [];
  productsToShow: TProducts = [];
  getStickyDrawer: (() => void) | undefined;

  constructor(private productService: ProductService) {
    this.productService
      .getListProducts()
      .subscribe((data: TProducts) => (this.products = data));

    this.productService
      .getListProductsByPagination()
      .subscribe((data: TProducts) => {
        this.productsToShow = data;
        scrollToTopImmediately();
      });
  }

  ngOnInit(): void {
    const drawerElement = document.getElementById("side-drawer");
    this.getStickyDrawer = () => {
      if (drawerElement) {
        if (window.scrollY > COMPONENT_DIMENSIONS.APP_BREADCRUMBS_HEIGHT) {
          return drawerElement.classList.add("side-nav-sticky");
        } else {
          return drawerElement.classList.remove("side-nav-sticky");
        }
      }
    };

    window.addEventListener("scroll", this.getStickyDrawer);
  }

  ngOnDestroy(): void {
    window.removeEventListener("scroll", this.getStickyDrawer as () => void);
  }
}
