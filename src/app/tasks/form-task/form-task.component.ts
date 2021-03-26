import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-form-task',
  templateUrl: './form-task.component.html'
})
export class FormTaskComponent {
  @ViewChildren(FormControlName, { read: ElementRef })
  private fields: QueryList<ElementRef>;

  public form: FormGroup;

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

  public saveForm(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    // Save form data
  }

  private getFirstInvalidFormElement(): HTMLElement | undefined {
    const ref = this.fields.find(({ nativeElement }) =>
      nativeElement.classList.contains('is-invalid')
    );

    return ref?.nativeElement;
  }
}
