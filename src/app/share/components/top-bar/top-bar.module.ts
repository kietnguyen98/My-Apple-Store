import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// components
import { TopBarComponent } from "./top-bar.component";
import { HeaderSearchInputComponent } from "./header-search-input/header-search-input.component";

// angular material modules
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from "@angular/material/tooltip";

// local modules
import { CartModule } from "@/app/features/cart/cart.module";

@NgModule({
  providers: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
    CartModule,
  ],
  declarations: [
    // root
    TopBarComponent,
    // children
    HeaderSearchInputComponent,
  ],
  exports: [TopBarComponent],
})
export class TopBarModule {}
