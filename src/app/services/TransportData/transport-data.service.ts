import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Car } from '../../interfaces/car';

@Injectable()
export class TransportDataService {

    constructor(private http: HttpClient) {
    }

    public getCars(): Observable<any> {
        return this.http.get(`api/cars`);
    }

    public addCar(car: Car): Observable<any> {
        return this.http.post('`api/cars', car);
    }

}
