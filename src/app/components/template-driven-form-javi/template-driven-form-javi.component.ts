import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form-javi',
  templateUrl: './template-driven-form-javi.component.html',
  styleUrls: ['./template-driven-form-javi.component.css']
})
export class TemplateDrivenFormJaviComponent implements OnInit {

  @ViewChild('form') form!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.form);
  }

}
