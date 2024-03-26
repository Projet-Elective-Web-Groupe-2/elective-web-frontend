import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  loginForm = new FormGroup({
    mail : new FormControl(""),
    password : new FormControl("")
  });

  onSubmit(){
    console.log(this.loginForm.value);
  }
}
