import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./features/home/pages/home/home.component";
import { ProductListComponent } from "./features/product/pages/product-list/product-list.component";
import { ProductDetailsComponent } from "./features/product/pages/product-details/product-details.component";
import { DummyComponent } from "./share/pages/dummy/dummy.component";
import { PATH } from "@/configs/routes";

const routes: Routes = [
  { path: PATH.HOME, component: HomeComponent },
  { path: PATH.DUMMY, component: DummyComponent },
  { path: PATH.LIST_PRODUCTS, component: ProductListComponent },
  {
    path: PATH.PRODUCT_DETAIL,
    component: ProductDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
