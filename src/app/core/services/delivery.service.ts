import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from './apiPaths';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class DeliveryService {
    constructor(private http: HttpClient) { }

    getOrdersList(): Observable<any> {
        const body = {};
        return this.http.post(`${environment.urlOrder}${API.getOrders}`, body, { withCredentials: false, observe: 'response' });
    }

}
