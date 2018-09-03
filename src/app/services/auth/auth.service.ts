import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { Router } from '@angular/router';



@Injectable()
export class AuthService {

    constructor(private http: HttpClient,
                private route: Router) {
    }

    public login(email: string, password: string): Observable<any> {
        return this.http.post('api/users/', {'email': email, 'password': password});
    }

    logout() {
        localStorage.removeItem('currentUser');
        this.route.navigateByUrl('login');

    }

}