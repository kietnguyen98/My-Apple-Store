import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductListComponent } from "./features/product/pages/product-list/product-list.component";
import { ProductDetailsComponent } from "./features/product/pages/product-details/product-details.component";

const routes: Routes = [
  { path: "", redirectTo: "/products", pathMatch: "full" },
  { path: "products", component: ProductListComponent },
  { path: "products/:productName", component: ProductDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
