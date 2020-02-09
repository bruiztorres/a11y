import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-task',
  templateUrl: './form-task.component.html'
})
export class FormTaskComponent {
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
    // Save form data
  }
}
