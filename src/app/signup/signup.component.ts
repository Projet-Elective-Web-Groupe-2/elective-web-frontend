import { Component } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm = new FormGroup({
    mail : new FormControl(""),
    password : new FormControl("")
  });
  onSubmit(){
    console.log(this.signupForm.value);
  }
}
