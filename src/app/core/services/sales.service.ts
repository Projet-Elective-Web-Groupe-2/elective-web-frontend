import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from './apiPaths';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class SalesService {
    constructor(private http: HttpClient) { }

    getUsers(token: any): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            })
        };
        return this.http.get(`${environment.urlUser}${API.getUsers}`, httpOptions);
    };

    getAllOrders(token: any): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            })
        };        
        return this.http.get(`${environment.urlOrder}${API.getAllOrders}`, httpOptions);
    }

}
