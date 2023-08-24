import { Component, OnInit } from "@angular/core";
import { TProducts } from "@/types";
import { COMPONENT_DIMENSIONS } from "@/constants";
import { ProductService } from "../../services/product.service";
import { scrollToTopImmediately } from "@/utilities/functions";
@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent implements OnInit {
  // current list of products
  products: TProducts = [];
  productsToShow: TProducts = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService
      .getListProducts()
      .subscribe((data: TProducts) => (this.products = data));

    this.productService
      .getListProductsByPagination()
      .subscribe((data: TProducts) => {
        this.productsToShow = data;
        scrollToTopImmediately();
      });

    const drawerElement = document.getElementById("side-drawer");
    function onScroll() {
      if (drawerElement) {
        if (window.scrollY > COMPONENT_DIMENSIONS.APP_BREADCRUMBS_HEIGHT) {
          return drawerElement.classList.add("side-nav-sticky");
        } else {
          return drawerElement.classList.remove("side-nav-sticky");
        }
      }
    }

    window.addEventListener("scroll", () => onScroll());
  }

  share() {
    window.alert("The product has been shared!");
  }
}
