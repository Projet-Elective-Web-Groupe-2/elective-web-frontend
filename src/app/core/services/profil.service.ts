import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from './apiPaths';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ProfilService {
    constructor(private http: HttpClient) { }

    getUserInfo(token: any): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            })
        };
        return this.http.get(`${environment.urlUser}${API.getUserInfo}`, httpOptions);
    }

    deleteUser(token: any, userID: any): Observable<any> {
        const body = { userID: userID };
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            })
        };
        return this.http.delete(`${environment.urlUser}${API.deleteUser}`, { body, ...httpOptions });
    }

    disableUser(token: any, userID: any): Observable<any> {
        const body = { userID: userID };
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            })
        };
        return this.http.post(`${environment.urlUser}${API.disableUser}`, body, httpOptions );
    }

    
    activateUser(token: any, userID: any): Observable<any> {
        const body = { userID: userID };
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            })
        };
        return this.http.post(`${environment.urlUser}${API.activateUser}`, body, httpOptions );
    }


    editUser(token: any, userID: any, editFormValue: any): Observable<any> {
        console.log(editFormValue);
        const body = {
            userID: userID,
            email: editFormValue.mail,
            password: editFormValue.password,
            phoneNumber: editFormValue.phone,
            firstName: editFormValue.firstName,
            lastName: editFormValue.name,
            address: editFormValue.address,
            
        };
        console.log(body);
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            })
        };
        return this.http.post(`${environment.urlUser}${API.editUser}`, body, httpOptions);
    }


}
