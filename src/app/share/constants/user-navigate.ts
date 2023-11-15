import { TUserMenuNavigation } from "@/app/share/types";
import { PATH } from "@/configs/routes";

export const USER_NAVIGATE_OPTIONS: TUserMenuNavigation = [
  {
    name: "My Profile",
    description: "update profile info, change your password",
    navigateUrl: `${PATH.USER}/${PATH.PROFILE}`,
    iconName: "account_box",
  },
  {
    name: "My Purchases",
    description: "manage and tracking your orders",
    navigateUrl: `${PATH.USER}/${PATH.PURCHASES}`,
    iconName: "list",
  },
  {
    name: "My Love list",
    description: "manage your love products and see what's news",
    navigateUrl: `${PATH.USER}/${PATH.LOVE_LIST}`,
    iconName: "favorite",
  },
];
