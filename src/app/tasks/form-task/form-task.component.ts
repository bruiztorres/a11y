import { Component, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-form-task',
  templateUrl: './form-task.component.html'
})
export class FormTaskComponent {
  public form: FormGroup;

  @ViewChildren(FormControlName, { read: ElementRef })
  private fields: QueryList<ElementRef>;

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      firstName:  [null, [ Validators.required, Validators.minLength(10) ]],
      lastName:   [null, [ Validators.required, Validators.minLength(10) ]],
      email:      [null, [ Validators.required, Validators.email ]],
      city:       [null, [ Validators.required ]],
      state:      [null, [ Validators.required ]],
      zip:        [null, [ Validators.required ]],
      terms:      [false, [ Validators.requiredTrue ]]
    }, {
      updateOn: 'blur'
    });
  }

  public saveForm() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.setFocusFirstInvalidControl();
    }

    // Save form data
  }

  private setFocusFirstInvalidControl() {
    setTimeout(() => {
      const firstInvalidField = this.fields.find(({ nativeElement }) =>
        nativeElement.classList.contains('is-invalid')
      );

      firstInvalidField.nativeElement.focus();
    });
  }
}
