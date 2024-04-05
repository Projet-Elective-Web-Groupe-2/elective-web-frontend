import { Component, importProvidersFrom } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../core/services/auth.service';
import { HttpResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private authService: AuthService, private toastr: ToastrService, private router: Router, private route: ActivatedRoute) { }

  selectedValue: string = '';

  signupForm = new FormGroup({
    userType: new FormControl(""),
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    address: new FormControl(""),
    email: new FormControl(""),
    phoneNumber: new FormControl(""),
    password: new FormControl(""),
    repassword: new FormControl(""),
    key: new FormControl("")
  });

  onSubmit() {
    this.authService.createAccount(this.signupForm.value).subscribe((response: HttpResponse<any>) => {
      const responseBody: string = response.body;
      this.toastr.success('Inscription réussi');
      this.router.navigate([`/auth`], { relativeTo: this.route });
    }, (error) => {
      this.toastr.error("Erreur lors de l'inscription, Veuillez réessayer");
      this.signupForm.reset()
    });;
  }

  onOptionChange(newValue: string) {
    this.selectedValue = newValue;
  }
}
