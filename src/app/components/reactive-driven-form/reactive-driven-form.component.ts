import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/utils/custom-validators';

@Component({
  selector: 'app-reactive-driven-form',
  templateUrl: './reactive-driven-form.component.html',
  styleUrls: ['./reactive-driven-form.component.css']
})
export class ReactiveDrivenFormComponent implements OnInit {

  form: FormGroup;

  nameField: FormControl;
  emailField: FormControl;
  passwordField: FormControl;
  roleField: FormControl;

  constructor() {
    // Initialize Form Control fields
    this.nameField = new FormControl('', [ Validators.required, CustomValidators.nameValidator ]);
    this.emailField = new FormControl('', [ Validators.required, Validators.email ]);
    this.passwordField = new FormControl('', [ Validators.required, Validators.minLength(7) ]);
    this.roleField = new FormControl('', [ Validators.required]);

    // Initialzie Form Group
    this.form = new FormGroup({
      name: this.nameField,
      email: this.emailField,
      password: this.passwordField,
      role: this.roleField
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.form);
  }

}
