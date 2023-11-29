import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./features/home/pages/home/home.component";
import { ProductListComponent } from "./features/product/pages/product-list/product-list.component";
import { ProductDetailsComponent } from "./features/product/pages/product-details/product-details.component";
import { DummyComponent } from "./share/pages/dummy/dummy.component";
import { LoginComponent } from "./features/auth/pages/login-page/login-page.component";
import { SignUpComponent } from "./features/auth/pages/sign-up/sign-up.component";
import { UserPageComponent } from "./features/user/pages/user-page/user-page.component";
import { UserProfilePageComponent } from "./features/user/pages/user-profile-page/user-profile-page.component";
import { UserPurchasesPageComponent } from "./features/user/pages/user-purchases-page/user-purchases-page.component";
import { UserLoveListPageComponent } from "./features/user/pages/user-love-list-page/user-love-list-page.component";
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
    path: PATH.PRODUCTS,
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
  {
    path: PATH.USER,
    component: UserPageComponent,
    children: [
      {
        title: "MAS - User information",
        pathMatch: "full",
        path: PATH.PROFILE,
        component: UserProfilePageComponent,
      },
      {
        title: "MAS - User Purchases",
        pathMatch: "full",
        path: PATH.PURCHASES,
        component: UserPurchasesPageComponent,
      },
      {
        title: "MAS - User love list",
        pathMatch: "full",
        path: PATH.LOVED_PRODUCTS,
        component: UserLoveListPageComponent,
      },
    ],
  },
  { path: "**", redirectTo: PATH.HOME, pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
