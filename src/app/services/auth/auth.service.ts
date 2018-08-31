import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthService {

    constructor(private http: HttpClient) {
    }

    public login(email: string, password: string): Observable<any> {
        return this.http.post('api/users/', {'email': email, 'password': password});
    }

    logout() {
        localStorage.removeItem('currentUser');
    }

}