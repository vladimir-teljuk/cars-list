import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

    constructor(private http: HttpClient) {
    }

    public getUser(login: string, password: string): Observable<any> {
        const params = {'login': login, 'password': password};
        return this.http.get('api/users', {params});
    }

}
