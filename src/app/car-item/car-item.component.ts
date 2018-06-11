import { Component, OnInit } from '@angular/core';
import { Car } from '../interfaces/car';
import { Router } from '@angular/router';
import { TransportDataService } from '../services/TransportData/transport-data.service';

@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.css'],
  providers: [TransportDataService],
})
export class CarItemComponent implements OnInit {

    public car: Car;

    constructor(private transportDataService: TransportDataService, private router: Router) {
    }

    ngOnInit() {
    }

    public cons() {

    }
}