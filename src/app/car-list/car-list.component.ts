import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TransportDataService } from '../services/TransportData/transport-data.service';

import { Car } from '../interfaces/car';

@Component({
    selector: 'app-car-list',
    templateUrl: './car-list.component.html',
    styleUrls: ['./car-list.component.css'],
    providers: [TransportDataService]
})
export class CarListComponent implements OnInit {
    public cars: Array<Car> = [];

    constructor(private transportDataService: TransportDataService, private router: Router) {

    }

    public ngOnInit(): void {
        this.getCarList();
    }

    private getCarList() {
        this.transportDataService.getCars().subscribe(data => {
            console.log(data);
            for (let i = 0; i < data.length; i++) {
                this.cars[i] = {
                    id: data[i].id,
                    brand: data[i].brand,
                    model: data[i].model,
                    year: data[i].year,
                    img: data[i].img
                };
            }
            return this.cars;
        });
    }

    public gotoAddCar() {
        this.router.navigateByUrl('add-car');
    }


}
