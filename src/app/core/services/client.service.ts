import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from './apiPaths';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ClientService {
    constructor(private http: HttpClient) { }

    getRestaurant(token: any): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            })
        };
        return this.http.get(`${environment.urlRestaurant}${API.getRestaurant}`, httpOptions);
    }

    getPanier(token: any): Observable<any> {
        const body = {};
        return this.http.post(`${environment.urlOrder}${API.getOrder}`, body, { headers: token, withCredentials: false, observe: 'response' });
    }

    getRestaurantDetail(idRestaurant: any, token: any): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            })
        };
        return this.http.get(`${environment.urlRestaurant}${API.getRestaurantDetail}`+ '?id=' + idRestaurant, httpOptions);
    }
}
