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
  message: string;
};
