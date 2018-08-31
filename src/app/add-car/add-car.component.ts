import {Component, OnInit} from '@angular/core';
import {ReactiveFormsModule, FormGroup, FormBuilder} from '@angular/forms';
import {Car} from '../interfaces/car';
import {TransportDataService} from '../services/TransportData/transport-data.service';
import {TransferBrandService} from '../services/transfer-brand/transfer-brand.service';
import {Router} from '@angular/router';


@Component({
    selector: 'app-add-car',
    templateUrl: './add-car.component.html',
    styleUrls: ['./add-car.component.css'],
    providers: [TransportDataService, TransferBrandService, ReactiveFormsModule],
})

export class AddCarComponent implements OnInit {
    public form: FormGroup;

    public brands = [];
    public models = [];

    constructor(private transport: TransportDataService,
                private transfer: TransferBrandService,
                private router: Router,
                private fb: FormBuilder) {
    }

    ngOnInit() {

        this.getBrand();
        this.createForm();

    }

    public addCar() {
        const car: Car = {
            brand: this.form.controls['brand'].value.name,
            model: this.form.controls['model'].value,
            year: this.form.controls['year'].value,
            img: this.form.controls['img'].value
        };
        this.transport.addCar(car).subscribe();
        console.log(car);
        this.router.navigateByUrl('car-list');

    }

    private getBrand() {
        this.transfer.getAllCarList().subscribe(data => {
            for (let i = 0; i < data.length; i++) {
                this.brands[i] = data[i];
            }
            console.log(this.brands);
            return this.brands;
        });
        return this.brands;
    }

    public getModel(chioseBrand) {
        console.log(chioseBrand['value'].name);
        for (let i = 0; i < this.brands.length; i++) {
            if (this.brands[i].name === chioseBrand['value'].name) {

                console.log(this.brands[i].name,
                    this.brands[i].models);
                this.models = this.brands[i].models;
            }
        }
        console.log(this.models);
        return this.models;
    }

    private createForm(): void {
        this.form = this.fb.group({
            brand: '',
            model: '',
            year: '',
            img: ''
        });
    }

}
