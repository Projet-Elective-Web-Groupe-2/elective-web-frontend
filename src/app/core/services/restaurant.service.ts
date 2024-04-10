import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from './apiPaths';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class RestaurantService {
    constructor(private http: HttpClient) { }

    getRestaurantInfo(token: any,userID:any,): Observable<any> {
        const body = {userID};
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            })
        };
        return this.http.get(`${environment.urlRestaurant}${API.getRestaurantDetail}`+ '?id=' + userID, httpOptions );
    }

    createArticle(token: any,userID:any,formValue:any): Observable<any> {
        const body = {
            name:formValue.name,
            description:formValue.compo,
            price:formValue.price,
            restaurantID:userID
        };
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            })
        };
        return this.http.post(`${environment.urlProduct}${API.createArticle}`, body, httpOptions );
    }
}
