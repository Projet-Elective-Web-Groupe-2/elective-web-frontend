import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {API} from './apiPaths';
import {User} from "../models/user.model";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: User | undefined;

  constructor(private http: HttpClient,
    ) {}

  loadUser(): Promise<void> {
    return new Promise((resolve, reject) => {
      environment.baseUrl;
      this.http.get<User>(
        `${environment.baseUrl}` + API.currentUser,
        {withCredentials: true}
      ).subscribe(user => {
        if (!user) {
          // Should never happen...
          console.error('User is authenticated but no information is available.');
          reject();
        }
        this.user = user;
        resolve();
      }, err => {
        console.error(err);

        if (err.status === 401) {
          // Not authorized, so let's authorize!
          window.location.href = `${environment.baseUrl}${API.successLoginUrl}`;
        }

        reject();
      });
    });
  }

  /*canAccess(app: string): boolean {
    return this.user.roles.includes(app);
  }*/
}
