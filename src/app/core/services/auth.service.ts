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

     /*const params = new HttpParams()
        .set('email', signupForm.email)
        .set('password', signupForm.password)
        .set('userType', signupForm.userType)
        .set('phoneNumber', signupForm.phoneNumber)
        .set('firstName', signupForm.firstName)
        .set('lastName', signupForm.lastName)
        .set('address', signupForm.address)
        return this.http.post(`${environment.baseUrl}${API.createAccount}`,{},{ withCredentials: false, params, observe: 'response'});*/
      
    createAccount(signupForm: any): Observable<any> {
        const body = {
            email: signupForm.email,
            password: signupForm.password,
            userType: signupForm.userType,
            phoneNumber: signupForm.phoneNumber,
            firstName: signupForm.firstName,
            lastName: signupForm.lastName,
            address: signupForm.address
        };
        return this.http.post(`${environment.baseUrl}${API.createAccount}`, body, { withCredentials: false, observe: 'response' });
    }

    login(authForm: any): Observable<any> {
        const body = {
            email: authForm.email,
            password: authForm.password
        };
        return this.http.post(`${environment.baseUrl}${API.login}`, body, { withCredentials: false, observe: 'response' });
    }
}
