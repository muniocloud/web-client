import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function sameFieldValue(fieldA: string, fieldB: string, property: string = 'sameFieldValue'): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const fieldAValue = control.get(fieldA)?.value;
    const fieldBValue = control.get(fieldB)?.value;
    const isInvalid = fieldAValue !== fieldBValue;
    return isInvalid ? { [property]: isInvalid } : null;
  };
};
