import {
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from "@angular/material/snack-bar";

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
