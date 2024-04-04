import { HttpClient, HttpParams } from '@angular/common/http';
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
        const params = new HttpParams()
        .set('email', signupForm.email)
        .set('password', signupForm.password)
        .set('userType', signupForm.userType)
        .set('phoneNumber', signupForm.phoneNumber)
        .set('firstName', signupForm.firstName)
        .set('lastName', signupForm.lastName)
        .set('address', signupForm.address)
        var test = this.http.post(`${environment.baseUrl}${API.createAccount}`,{},{ withCredentials: true, params, observe: 'response'});
        console.log(test);
        return test;
    }
}
