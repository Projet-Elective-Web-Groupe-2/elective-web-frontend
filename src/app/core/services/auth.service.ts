import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from './apiPaths';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private http: HttpClient) { }

    createAccount(signupForm: any): Observable<any> {
        console.log(signupForm);
        const body = {
            email: signupForm.email,
            password: signupForm.password,
            userType: signupForm.userType,
            phoneNumber: signupForm.phoneNumber,
            firstName: signupForm.firstName,
            lastName: signupForm.lastName,
            address: signupForm.address,
            restaurantName: signupForm.restaurantName,
            restaurantAddress: signupForm.restaurantAddress,
        };
        return this.http.post(`${environment.urlAuth}${API.createAccount}`, body, { withCredentials: false, observe: 'response' });
    }

    login(authForm: any): Observable<any> {
        const body = {
            email: authForm.email,
            password: authForm.password
        };
        return this.http.post(`${environment.urlAuth}${API.login}`, body, { withCredentials: false, observe: 'response' });
    }
}
