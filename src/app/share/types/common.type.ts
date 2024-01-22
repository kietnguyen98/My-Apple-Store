import {
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from "@angular/material/snack-bar";
import { COMPONENT_SIZE_VALUES } from "../constants";

export type TSnackBarConfigOptions = {
  horizontalPosition: MatSnackBarHorizontalPosition;
  verticalPosition: MatSnackBarVerticalPosition;
  duration: number;
  panelClass: string;
};

export type TSnackBarProps = {
  isSuccess: boolean;
  message: string;
};

export type TFormValidationMessages = {
  [key: string]: { [key: string]: string };
};

export type TFormErrorMessages = { [key: string]: string };

export type TUserMenuNavigation = Array<{
  name: string;
  description?: string;
  navigateUrl: string;
  iconName: string;
}>;

export type TComponentSizeValues =
  (typeof COMPONENT_SIZE_VALUES)[keyof typeof COMPONENT_SIZE_VALUES];
