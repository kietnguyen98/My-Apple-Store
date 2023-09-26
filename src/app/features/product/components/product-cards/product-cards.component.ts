import { Component, Input, OnInit } from "@angular/core";
import { TProduct } from "@/types";
import { PATH } from "@/configs/routes";
import { RouteService } from "@/app/share/services/route.service";
import { AuthService } from "@/app/features/auth/services/auth.service";
import { MatDialog } from "@angular/material/dialog";
import { LoginPopupComponent } from "@/app/features/auth/components/login-popup/login-popup.component";
import { productHelper } from "@/utilities/helperFunctions";
@Component({
  selector: "app-product-cards",
  templateUrl: "./product-cards.component.html",
  styleUrls: ["./product-cards.component.css"],
})
export class ProductCardsComponent implements OnInit {
  @Input() product?: TProduct;
  @Input() inDetailPage: boolean = false;
  originalPrice: number | undefined;
  salePrice: number | undefined;

  constructor(
    private routeService: RouteService,
    private authService: AuthService,
    private dialogControl: MatDialog
  ) {}

  ngOnInit(): void {
    if (this.product) {
      this.originalPrice = productHelper.getOriginalPrice(
        this.product,
        this.product.memoryCapacities?.[0]
      );
      if (this.product.salePercentage > 0) {
        this.salePrice = productHelper.getSalePrice(
          this.product,
          this.product.memoryCapacities?.[0]
        );
      }
    }
  }

  onGetDetailProduct() {
    this.routeService.navigateWithUrlOnly({
      path: [PATH.LIST_PRODUCTS, this.product?.name as string],
      reload: this.inDetailPage,
    });
  }

  handleAddToLoveList() {
    if (this.authService.isAuth) {
      window.alert("you will be notify when the product goes on sale");
    } else {
      this.dialogControl.open(LoginPopupComponent, {
        disableClose: true,
        hasBackdrop: true,
      });
    }
  }
}
