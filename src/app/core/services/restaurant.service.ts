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
        return this.http.get(`${environment.urlRestaurant}${API.getRestaurantInformation}`+ '?id=' + userID, httpOptions );
    }

    getOrdersNumbers(token: any,restaurantID:any,daysBack:any): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            })
        };
        return this.http.get(`${environment.urlRestaurant}${API.getOrdersSince}`+ '?restaurantID=' + restaurantID+ '&daysBack=' + daysBack, httpOptions );
    }

    createArticle(token: any,userID:any,formValue:any): Observable<any> {
        const body = {
            name:formValue.name,
            description:formValue.compo,
            price:formValue.price,
            restaurantID:userID,
            image:formValue.photo,
            isDrink:formValue.isDrink,
        };
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            })
        };
        return this.http.post(`${environment.urlProduct}${API.createArticle}`, body, httpOptions );
    }

    createMenu(token: any,userID:any,formValue:any,idList:string[]): Observable<any> {
        const body = {
            name:formValue.name,
            productIds:idList,
            totalPrice:formValue.price,
            restaurantID:userID,
            image:formValue.photo,
            drinkButtonClicked:formValue.drink,
        };
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            })
        };
        return this.http.post(`${environment.urlMenu}${API.createMenu}`, body, httpOptions );
    }
    
    getDrinks(token: any,idRestaurant:any): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            })
        };
        return this.http.get(`${environment.urlProduct}${API.getDrinks}`+ '?restaurantID=' + idRestaurant, httpOptions );
    }

    getMenu(token: any,menuID:any): Observable<any> {
        const body = {
            id:menuID,
        };
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            })
        };
        return this.http.post(`${environment.urlMenu}${API.getMenu}`, body, httpOptions );
    }

    getArticle(token: any,articleID:any): Observable<any> {
        const body = {
            id:articleID,
        };
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            })
        };
        return this.http.post(`${environment.urlProduct}${API.getArticle}`, body, httpOptions );
    }

}
