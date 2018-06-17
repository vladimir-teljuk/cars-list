import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Car } from '../../interfaces/car';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {

    createDb() {
        const cars: Car[] = [
            { id: 0, brand: 'Bugatti', model: 'Veyron', year: '2006',
             img: 'https://www.pureluxe.nl/wp-content/uploads/2018/02/aankopen-miljardairs-gekskte-investeringen-Pure-Luxe-2-1100x540.jpg'},
            { id: 1, brand: 'Mazda', model: 'RX-8', year: '2010', img: 'https://a.d-cd.net/6515f9s-960.jpg' }
        ];
        const brands = [
            {name: 'Audi', models: ['A1', 'A3', 'A4', 'A6']},
            {name: 'Bugatti', models: ['Veyron', 'Chiron']},
            {name: 'Mazda', models: ['3', '6', 'RX-6', 'RX-8']},
            {name: 'Ferrari', models: ['Dino', 'Mondial', 'Berlinetta']},
        ];
        const users = [
            { id: 0, login: 'admin-admin.com', password: 'admin'},
            { id: 0, login: 'admin-gmail.com', password: 'admin'},
        ];
        return {cars, brands, users};
    }
}
