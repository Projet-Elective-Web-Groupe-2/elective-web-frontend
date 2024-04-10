import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from './apiPaths';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class DeveloperService {
    constructor(private http: HttpClient) { }

    getRestaurant(): Observable<any> {
        const body = {};
        return this.http.post(`${environment.urlRestaurant}${API.getRestaurant}`, body, { withCredentials: false, observe: 'response' });
    }

}
