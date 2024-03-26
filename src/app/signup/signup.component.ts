import { Component, importProvidersFrom } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { Signup } from '../core/models/signup.model';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  selectedValue: string = '';

  signupForm = new FormGroup({
    type : new FormControl(""),
    surname : new FormControl(""),
    name : new FormControl(""),
    address : new FormControl(""),
    mail : new FormControl(""),
    phone : new FormControl(""),
    password : new FormControl(""),
    repassword : new FormControl(""),
  });
  onSubmit(){
    console.log(this.signupForm.value);
  }
  onOptionChange(newValue: string) {
    this.selectedValue=newValue;
    console.log(newValue);
  }
}
