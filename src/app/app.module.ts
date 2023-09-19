import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// app components import
import { AppComponent } from "./app.component";

// global modules
import { ShareModule } from "./share/share.module";
import { HomeModule } from "./features/home/home.module";
import { ProductModule } from "./features/product/product.module";
import { CartModule } from "./features/cart/cart.module";
import { AuthModule } from "./features/auth/auth.module";

// routing module
import { AppRoutingModule } from "./app-routing.module";

// services
import { RouteService } from "./share/services/route.service";

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ShareModule,
    HomeModule,
    ProductModule,
    CartModule,
    AuthModule,
  ],
  providers: [RouteService],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
