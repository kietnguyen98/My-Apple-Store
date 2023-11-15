import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// components
import { FooterComponent } from "./footer.component";
import { FooterSortLinksComponent } from "./footer-sort-links/footer-sort-links.component";

// modules

// angular material modules
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatButtonModule } from "@angular/material/button";
import { MatRippleModule } from "@angular/material/core";

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    MatRippleModule,
  ],
  declarations: [FooterComponent, FooterSortLinksComponent],
  providers: [],
  exports: [FooterComponent],
})
export class FooterModule {}
