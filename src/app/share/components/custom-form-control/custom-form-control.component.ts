import {
  Component,
  AfterViewInit,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  ViewChildren,
} from "@angular/core";
import { TFormErrorMessages, TFormValidationMessages } from "@/types";
import { FormBuilder, FormControlName, FormGroup } from "@angular/forms";
import { Observable, debounceTime, fromEvent, merge } from "rxjs";
import { formHelper } from "@/utilities/helperFunctions";

@Component({
  selector: "app-custom-form-control",
  templateUrl: "./custom-form-control.component.html",
  styleUrls: ["./custom-form-control.component.css"],
})
export class CustomFormControlComponent implements AfterViewInit {
  @ViewChildren(FormControlName, { read: ElementRef })
  formInputElements: ElementRef[] = [];
  errorMessages: TFormErrorMessages = {};
  @Input() formGroup: FormGroup;
  @Input() validationMessages: TFormValidationMessages = {};
  @Input() isLoading: boolean = false;
  @Output() submitForm = new EventEmitter<{ [key: string]: string }>();

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({});
  }

  ngAfterViewInit(): void {
    if (this.formGroup instanceof FormGroup) {
      const inputElementBlurs: Observable<any>[] = this.formInputElements.map(
        (formControl: ElementRef) =>
          fromEvent(formControl.nativeElement, "blur")
      );

      merge(...inputElementBlurs, this.formGroup.valueChanges)
        .pipe(debounceTime(250))
        .subscribe(() => {
          this.errorMessages = formHelper.getErrorMessages(
            this.formGroup,
            this.validationMessages
          );
        });
    }
  }

  resetFormState() {
    this.isLoading = false;
    this.errorMessages = {};
  }

  onSubmit() {
    // for checking error
    // mark all the form's input field to be dirty and touched as it is submit
    if (this.formGroup instanceof FormGroup) {
      for (let key of Object.keys(this.formGroup.controls)) {
        this.formGroup.controls[key].markAllAsTouched();
        this.formGroup.controls[key].markAsDirty();
      }
      if (this.formGroup.valid) {
        const payload: { [key: string]: string } = {};
        for (let key of Object.keys(this.formGroup.controls)) {
          payload[key] = this.formGroup.value[key];
        }
        this.submitForm.emit(payload);
      } else {
        this.errorMessages = formHelper.getErrorMessages(
          this.formGroup,
          this.validationMessages
        );
      }
    }
  }
}
