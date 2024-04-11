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

    createOrder(token: any,restaurantID:any, panier: any): Observable<any> {
        const body = {
            items:panier,
            restaurantID:restaurantID
        }
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            })
        };
        return this.http.post(`${environment.urlOrder}${API.createOrder}`, body, httpOptions);
    }

    getAllOrdersFromRestaurant(token: any, userID: any): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            })
        };
        return this.http.get(`${environment.urlOrder}${API.getAllOrdersFromRestaurant}`+ '?userID=' + userID, httpOptions);
    }

    


}
