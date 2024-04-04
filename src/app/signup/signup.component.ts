import { Component, importProvidersFrom } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { AuthService } from '../core/services/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private authService: AuthService
  ) {}

  selectedValue: string = '';

  signupForm = new FormGroup({
    userType : new FormControl(""),
    firstName : new FormControl(""),
    lastName : new FormControl(""),
    address : new FormControl(""),
    email : new FormControl(""),
    phoneNumber : new FormControl(""),
    password : new FormControl(""),
    repassword : new FormControl(""),
    key : new FormControl("")
  });
  onSubmit(){
    console.log(this.signupForm.value);
    this.authService.createAccount(this.signupForm.value).subscribe();
  }
  onOptionChange(newValue: string) {
    this.selectedValue=newValue;
    console.log(newValue);
  }
}
