import { Component, OnInit } from '@angular/core';
import { Car } from '../interfaces/car';
import { FormGroup, FormBuilder} from '@angular/forms';
import { TransportDataService } from '../services/TransportData/transport-data.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-add-car',
    templateUrl: './add-car.component.html',
    styleUrls: ['./add-car.component.css'],
    providers: [FormBuilder, TransportDataService],
})
export class AddCarComponent implements OnInit {

    public car: Car;

    public form: FormGroup;
    constructor(private fb: FormBuilder, private transport: TransportDataService, private router: Router) {
    }

    ngOnInit() {
        this.createForm();
    }

    public addCar(): void {
        const car: Car = {
            brand: this.form.controls['brand'].value,
            model: this.form.controls['model'].value,
            year: this.form.controls['year'].value,
            img: this.form.controls['img'].value
        };
        // console.log(car);
        this.transport.addCar(car).subscribe(data => {
            this.car = data;
            console.log(this.car);
        });
        this.router.navigateByUrl('car-list');
}

    private createForm(): void {
        this.form = this.fb.group({
            brand: '',
            model: '',
            year: '',
            img: '',
        });
    }

}
