import { TFormErrorMessages, TFormValidationMessages } from "@/app/share/types";
import { FormGroup } from "@angular/forms";

export function getErrorMessages(
  formControls: FormGroup,
  validationMessages: TFormValidationMessages
): TFormErrorMessages {
  const errorMessages: TFormErrorMessages = {};
  // loop through all the formControls
  for (const controlKey in formControls.controls) {
    // get the properties of each formControl
    const controlProperty = formControls.controls[controlKey];
    // If it is a FormGroup, process its child controls.
    if (controlProperty instanceof FormGroup) {
      const childMessages = getErrorMessages(
        controlProperty,
        validationMessages
      );
      Object.assign(errorMessages, childMessages);
    } else {
      // Only validate if there are validation errorMessages for the control
      if (validationMessages[controlKey]) {
        errorMessages[controlKey] = "";
        if (
          controlProperty.errors &&
          controlProperty.touched &&
          controlProperty.dirty
        ) {
          // loop through the object of errors
          Object.keys(controlProperty.errors).map(messageKey => {
            if (validationMessages[controlKey][messageKey]) {
              errorMessages[controlKey] =
                validationMessages[controlKey][messageKey];
            }
          });
        }
      }
    }
  }
  return errorMessages;
}
