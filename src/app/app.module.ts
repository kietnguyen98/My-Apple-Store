import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// app components import
import { AppComponent } from "./app.component";

// global modules
import { ShareModule } from "./share/share.module";
import { ProductModule } from "./features/product/product.module";
import { CartModule } from "./features/cart/cart.module";

// routing module
import { AppRoutingModule } from "./app-routing.module";
@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ShareModule,
    ProductModule,
    CartModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
