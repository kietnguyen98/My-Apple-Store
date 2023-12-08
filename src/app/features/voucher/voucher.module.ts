import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// components
import { VoucherCardComponent } from "./components/voucher-card/voucher-card.component";

// pipes
import { DDMMYYYYFormatDatePipe } from "./pipes/date-time-convert.pipe";
import { VouchersByCategoryPipe } from "./pipes/vouchers-by-category.pipe";

// services
import { VoucherService } from "./services/voucher.service";

// angular material modules
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  imports: [CommonModule, MatIconModule],
  declarations: [
    // components
    VoucherCardComponent,
    // pipes
    DDMMYYYYFormatDatePipe,
    VouchersByCategoryPipe,
  ],
  providers: [VoucherService],
  exports: [
    // components
    VoucherCardComponent,
    // pipes
    VouchersByCategoryPipe,
  ],
})
export class VoucherModule {}
