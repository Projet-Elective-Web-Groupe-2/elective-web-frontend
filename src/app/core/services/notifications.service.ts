import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from './apiPaths';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class NotificationsService {
    constructor(private http: HttpClient) { }

    getOrderCount(token: any, userID: any,restaurantID:string): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            })
        };

        const params = new HttpParams().set('restaurantID', restaurantID);

      return this.http.get(`${environment.urlRestaurant}${API.getOrderCount}`, { params, ...httpOptions });

    }
}
