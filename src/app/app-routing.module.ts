import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./features/home/pages/home/home.component";
import { ProductListComponent } from "./features/product/pages/product-list/product-list.component";
import { ProductDetailsComponent } from "./features/product/pages/product-details/product-details.component";
import { DummyComponent } from "./share/pages/dummy/dummy.component";
import { LoginComponent } from "./features/auth/pages/login/login.component";
import { SignUpComponent } from "./features/auth/pages/sign-up/sign-up.component";
import { PATH } from "@/configs/routes";

const routes: Routes = [
  { path: "", redirectTo: PATH.HOME, pathMatch: "full" },
  {
    path: PATH.HOME,
    title: "MAS - Home",
    pathMatch: "full",
    component: HomeComponent,
  },
  { path: PATH.DUMMY, pathMatch: "full", component: DummyComponent },
  {
    path: PATH.LIST_PRODUCTS,
    title: "MAS - Store",
    pathMatch: "full",
    component: ProductListComponent,
  },
  {
    path: PATH.PRODUCT_DETAIL,
    title: "MAS - Product",
    pathMatch: "full",
    component: ProductDetailsComponent,
  },
  {
    path: PATH.LOGIN,
    title: "MAS - Login",
    pathMatch: "full",
    component: LoginComponent,
  },
  {
    path: PATH.SIGN_UP,
    title: "MAS - Sign up",
    pathMatch: "full",
    component: SignUpComponent,
  },
  { path: "**", redirectTo: PATH.HOME, pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
