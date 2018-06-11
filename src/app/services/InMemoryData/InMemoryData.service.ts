import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Car } from '../../interfaces/car';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {

    createDb() {
        const cars: Car[] = [
            { id: 0, brand: 'Mr. Nice', model: '111', year: '123', img: '123r' },
            { id: 1, brand: 'Mr. Nice', model: '111', year: '123', img: '123r' }
        ];
        return {cars};
    }
}
