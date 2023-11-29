import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./features/home/pages/home-page/home-page.component";
import { ProductListPageComponent } from "./features/product/pages/product-list-page/product-list-page.component";
import { ProductDetailPageComponent } from "./features/product/pages/product-detail-page/product-detail-page.component";
import { DummyPageComponent } from "./share/pages/dummy-page/dummy-page.component";
import { LoginPageComponent } from "./features/auth/pages/login-page/login-page.component";
import { SignUpPageComponent } from "./features/auth/pages/sign-up-page/sign-up-page.component";
import { UserPageComponent } from "./features/user/pages/user-page/user-page.component";
import { UserProfilePageComponent } from "./features/user/pages/user-profile-page/user-profile-page.component";
import { UserPurchasesPageComponent } from "./features/user/pages/user-purchases-page/user-purchases-page.component";
import { UserLoveListPageComponent } from "./features/user/pages/user-love-list-page/user-love-list-page.component";
import { PATH } from "@/app/share/configs";

const routes: Routes = [
  { path: "", redirectTo: PATH.HOME, pathMatch: "full" },
  {
    path: PATH.HOME,
    title: "MAS - Home",
    pathMatch: "full",
    component: HomePageComponent,
  },
  { path: PATH.DUMMY, pathMatch: "full", component: DummyPageComponent },
  {
    path: PATH.PRODUCTS,
    title: "MAS - Store",
    pathMatch: "full",
    component: ProductListPageComponent,
  },
  {
    path: PATH.PRODUCT_DETAIL,
    title: "MAS - Product",
    pathMatch: "full",
    component: ProductDetailPageComponent,
  },
  {
    path: PATH.LOGIN,
    title: "MAS - Login",
    pathMatch: "full",
    component: LoginPageComponent,
  },
  {
    path: PATH.SIGN_UP,
    title: "MAS - Sign up",
    pathMatch: "full",
    component: SignUpPageComponent,
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
