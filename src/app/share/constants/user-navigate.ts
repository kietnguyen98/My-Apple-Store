import { TUserMenuNavigation } from "@/app/share/types";
import { PATH } from "@/app/share/configs";

export const USER_NAVIGATE_OPTIONS: TUserMenuNavigation = [
  {
    name: "My Profile",
    description: "Update profile info, change your password",
    navigateUrl: `${PATH.USER}/${PATH.PROFILE}`,
    iconName: "account_box",
  },
  {
    name: "My Purchases",
    description: "Manage and tracking your orders",
    navigateUrl: `${PATH.USER}/${PATH.PURCHASES}`,
    iconName: "list",
  },
  {
    name: "My Love list",
    description: "Manage your loved products and see what's news",
    navigateUrl: `${PATH.USER}/${PATH.LOVED_PRODUCTS}`,
    iconName: "favorite",
  },
];
