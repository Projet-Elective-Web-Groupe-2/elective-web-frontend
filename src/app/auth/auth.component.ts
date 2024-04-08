import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../core/services/auth.service';
import { HttpResponse } from '@angular/common/http';
import { jwtDecode } from "jwt-decode";
import { Router, ActivatedRoute } from '@angular/router';
import { SessionStorageService } from '../core/services/session-storage.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private authService: AuthService,private toastr: ToastrService,private router: Router, private route: ActivatedRoute,private sessionStorageService: SessionStorageService) { }

  loginForm = new FormGroup({
    email: new FormControl(""),
    password: new FormControl("")
  });
  
  ngOnInit() {
    this.sessionStorageService.clear();
  }

  onSubmit() {
    this.authService.login(this.loginForm.value).subscribe((response: HttpResponse<any>) => {
      let tokenValues = this.decodeToken(response.body.accessToken);
      this.sessionStorageService.setItem('type', tokenValues.type.toLowerCase());
      let route;
      if(tokenValues.type.toLowerCase() == 'restaurateur'){
        route = 'restaurant' 
      }
      else{
        route = tokenValues.type.toLowerCase();
      }
      this.router.navigate([`/${route}`], { relativeTo: this.route });
    }, (error) => {
      this.toastr.error("Erreur lors de la connection. Veuillez réessayer");
      this.loginForm.reset();
    });;
  }

  decodeToken(token: string): any {
    try {
      return jwtDecode(token);
    } catch (Error) {
      return null; 
    }
  }
}
