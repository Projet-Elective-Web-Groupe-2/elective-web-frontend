import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from './apiPaths';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ComponentService {
    constructor(private http: HttpClient) { }

    getLogComponent(token: any): Observable<any> {
        
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            })
        };
        return this.http.get(`${environment.urlComponent}${API.getComponentLog}`, httpOptions );
    }

    writeLogComponent(token: any,componentName:any): Observable<any> {
        const body = {
            componentName:componentName,
        };
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            })
        };
        return this.http.post(`${environment.urlComponent}${API.writeComponentLog}`, body, httpOptions );
    }


}