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

    getDeliveryWithFilter(token:any): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            })
        };
        return this.http.get(`${environment.urlDelivery}${API.getDelivery}`, httpOptions);
    }

    refuseDelivery(token:any,orderID:any): Observable<any>{
        const body = {
            orderID:orderID,
        };
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            })
        };
        return this.http.post(`${environment.urlDelivery}${API.refuseDelivery}`, body, httpOptions );
    }
    acceptDelivery(token:any,orderID:any):Observable<any>{
        const body = {
            orderID:orderID,
        };
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            })
        };
        return this.http.post(`${environment.urlDelivery}${API.acceptDelivery}`, body, httpOptions );
    }
    getStatutDelivery(token: any,orderID:any,): Observable<any>{
        const body = {orderID};
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            })
        };
        return this.http.get(`${environment.urlDelivery}${API.getStatutDelivery}`+ '?id=' + orderID, httpOptions );
    }
    trackDeliveryDelivery(token: any,orderID:any,): Observable<any>{
        const body = {orderID};
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            })
        };
        return this.http.get(`${environment.urlDelivery}${API.trackDeliveryDelivery}`+ '?id=' + orderID, httpOptions );

    }
    nerbyDelivery(token: any,orderID:any,): Observable<any>{
        const body = {orderID};
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            })
        };
        return this.http.get(`${environment.urlDelivery}${API.nerbyDelivery}`+ '?id=' + orderID, httpOptions );

    }
    validateDelivery(token: any,orderID:any,): Observable<any>{
        const body = {
            orderID:orderID,
        };
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            })
        };
        return this.http.post(`${environment.urlDelivery}${API.validateDelivery}`, body, httpOptions );

    }
    getMetricDelivery(token: any): Observable<any>{
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            })
        };
        return this.http.get(`${environment.urlDelivery}${API.getMetricDelivery}`, httpOptions );

    }

}
