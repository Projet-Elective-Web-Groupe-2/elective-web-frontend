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
        const body = {
            panier,
        }
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            })
        };
        return this.http.post(`${environment.urlRestaurant}${API.getRestaurant}`, body, httpOptions);
    }


}
