import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from './apiPaths';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class OrderService {
    constructor(private http: HttpClient) { }

    createOrder(token: any, panier: any): Observable<any> {
        console.log(panier);
        const body = {
            items:panier,
        }
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            })
        };
        return this.http.post(`${environment.urlOrder}${API.createOrder}`, body, httpOptions);
    }


}
