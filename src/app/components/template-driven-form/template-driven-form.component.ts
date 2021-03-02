import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  displayErrors: boolean = false;
  list: number[] = [1, 2, 3];

  @ViewChild('form') form!: NgForm;

  name: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.form);
    // console.log(form.form.controls.name.invalid);

    console.log(this.name);
    // console.log(form.form.controls.email.value);
    // console.log(form.form.controls.password.value);

    // Llamar al servicio que me guarda este usuario

    alert('Form submitted :3');


  }

}
