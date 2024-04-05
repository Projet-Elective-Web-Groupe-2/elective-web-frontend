import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../core/services/auth.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  constructor(private authService: AuthService) { }

  loginForm = new FormGroup({
    email: new FormControl(""),
    password: new FormControl("")
  });

  onSubmit() {
    this.authService.login(this.loginForm.value).subscribe((response: HttpResponse<any>) => {
      const responseBody: string = response.body;
      console.log(responseBody); 
    }, (error) => {
      console.error('Error occurred:', error);
    });;
  }
}
