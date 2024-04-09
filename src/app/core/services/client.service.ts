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

    getRestaurant(token:any): Observable<any> {
        const body = {};
        return this.http.post(`${environment.urlRestaurant}${API.getRestaurant}`, body, { headers:token, withCredentials: false, observe: 'response' });
    }

    getPanier(token:any): Observable<any> {
        const body = {};
        return this.http.post(`${environment.urlOrder}${API.getOrder}`, body, { headers:token,withCredentials: false, observe: 'response' });
    }

    getRestaurantDetail(idRestaurant: string,token:any): Observable<any> {
        const body = {id: idRestaurant};
        return this.http.post(`${environment.urlRestaurant}${API.getOrder}`, body, { headers:token, withCredentials: false, observe: 'response' });
    }

}
