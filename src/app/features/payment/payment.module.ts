import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// components
import { PaymentPageComponent } from "./pages/payment-page/payment-page.component";
import { PaymentBagInfoComponent } from "./components/payment-bag-info/payment-bag-info.component";
import { PaymentBagItemCardComponent } from "./components/payment-bag-info/payment-bag-item-card/payment-bag-item-card.component";
import { PaymentUserInfoComponent } from "./components/payment-user-info/payment-user-info.component";
import { PaymentShippingInfoComponent } from "./components/payment-shipping-info/payment-shipping-info.component";
import { PaymentVouchersInfoComponent } from "./components/payment-vouchers-info/payment-vouchers-info.component";
import { PaymentMethodInfoComponent } from "./components/payment-method-info/payment-method-info.component";
import { PaymentTotalAndActionComponent } from "./components/payment-total-and-action/payment-total-and-action.component";
import { PaymentSectionHeaderBadgeComponent } from "./components/payment-section-header-badge/payment-section-header-badge.component";

// modules
import { ShareModule } from "@/app/share/share.module";

// services
import { PaymentService } from "./services/payment.service";

// angular material modules
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  imports: [CommonModule, ShareModule, MatButtonModule, MatIconModule],
  declarations: [
    // pages
    PaymentPageComponent,
    // components
    PaymentBagInfoComponent,
    PaymentBagItemCardComponent,
    PaymentUserInfoComponent,
    PaymentShippingInfoComponent,
    PaymentVouchersInfoComponent,
    PaymentMethodInfoComponent,
    PaymentTotalAndActionComponent,
    PaymentSectionHeaderBadgeComponent,
  ],
  providers: [PaymentService],
  exports: [
    // pages
    PaymentPageComponent,
  ],
})
export class PaymentModule {}
