import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// components
import { PaymentPageComponent } from "./pages/payment-page/payment-page.component";
import { PaymentBagInfoComponent } from "./components/payment-bag-info/payment-bag-info.component";
import { PaymentBagInfoPopupComponent } from "./components/payment-bag-info/payment-bag-info-popup/payment-bag-info-popup.component";
import { PaymentBagItemCardComponent } from "./components/payment-bag-info/payment-bag-item-card/payment-bag-item-card.component";
import { PaymentUserInfoComponent } from "./components/payment-user-info/payment-user-info.component";
import { PaymentShippingInfoComponent } from "./components/payment-shipping-info/payment-shipping-info.component";
import { PaymentVouchersInfoComponent } from "./components/payment-vouchers-info/payment-vouchers-info.component";
import { PaymentVouchersListPopupComponent } from "./components/payment-vouchers-info/payment-vouchers-list-popup/payment-vouchers-list-popup.component";
import { PaymentVoucherAppliedCardComponent } from "./components/payment-vouchers-info/payment-voucher-applied-card/payment-voucher-applied-card.component";
import { PaymentVoucherApplyByCodeComponent } from "./components/payment-vouchers-info/payment-voucher-apply-by-code/payment-voucher-apply-by-code.component";
import { PaymentMethodInfoComponent } from "./components/payment-method-info/payment-method-info.component";
import { PaymentMethodChipComponent } from "./components/payment-method-info/payment-method-chip/payment-method-chip.component";
import { PaymentMethodCardFormComponent } from "./components/payment-method-info/payment-method-card-form/payment-method-card-form.component";
import { PaymentTotalAndActionComponent } from "./components/payment-total-and-action/payment-total-and-action.component";
import { PaymentSectionHeaderBadgeComponent } from "./components/payment-section-header-badge/payment-section-header-badge.component";

// common modules
import { ReactiveFormsModule } from "@angular/forms";

// feature modules
import { ShareModule } from "@/app/share/share.module";
import { VoucherModule } from "../voucher/voucher.module";

// services
import { PaymentService } from "./services/payment.service";

// pipes
import { TotalBagItemsPipe } from "./pipes/total-bag-items-pipe.pipe";
import { CardNumberDisplayPipe } from "./pipes/card-number-display-pipe.pipe";

// angular material modules
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatDialogModule } from "@angular/material/dialog";
import { MatRadioModule } from "@angular/material/radio";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ShareModule,
    VoucherModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatRadioModule,
  ],
  declarations: [
    // pages
    PaymentPageComponent,
    // components
    PaymentBagInfoComponent,
    PaymentBagItemCardComponent,
    PaymentBagInfoPopupComponent,
    PaymentUserInfoComponent,
    PaymentShippingInfoComponent,
    PaymentVouchersInfoComponent,
    PaymentVouchersListPopupComponent,
    PaymentVoucherAppliedCardComponent,
    PaymentVoucherApplyByCodeComponent,
    PaymentMethodInfoComponent,
    PaymentMethodChipComponent,
    PaymentMethodCardFormComponent,
    PaymentTotalAndActionComponent,
    PaymentSectionHeaderBadgeComponent,
    // pipes
    TotalBagItemsPipe,
    CardNumberDisplayPipe,
  ],
  providers: [PaymentService],
  exports: [
    // pages
    PaymentPageComponent,
  ],
})
export class PaymentModule {}
