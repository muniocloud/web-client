import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function sameFieldValue(field: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const fieldValue = control.parent?.get(field)?.value;
    const value = control.value;
    const isInvalid = fieldValue !== value;
    return isInvalid ? { sameFieldValue: isInvalid } : null;
  };
};
