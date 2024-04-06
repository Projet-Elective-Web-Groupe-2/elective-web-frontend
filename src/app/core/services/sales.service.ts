import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from './apiPaths';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class SalesService {
    constructor(private http: HttpClient) { }

    getInfoForSales(): Observable<any> {
        const body = {};
        return this.http.post(`${environment.baseUrl}${API.createAccount}`, body, { withCredentials: false, observe: 'response' });
    }

}
