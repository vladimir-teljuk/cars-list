import {Component, OnInit} from '@angular/core';
import {Car} from '../interfaces/car';
import {TransportDataService} from '../services/TransportData/transport-data.service';
import {Router, ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {TransferBrandService} from '../services/transfer-brand/transfer-brand.service';

@Component({
    selector: 'app-car-item',
    templateUrl: './car-item.component.html',
    styleUrls: ['./car-item.component.css'],
    providers: [TransportDataService, TransferBrandService],

})
export class CarItemComponent implements OnInit {

    public car: Car = {
        brand: '',
        model: '',
        year: '',
        img: ''
    };

    public form: FormGroup;

    public brands = [];
    public models = [];

    constructor(private transport: TransportDataService,
                private router: Router,
                private transfer: TransferBrandService,
                private selectCar: ActivatedRoute,
                private fb: FormBuilder) {
    }

    ngOnInit() {
        this.getCar();
        this.getBrand();
        this.createForm();
    }

    private getCar(): Car {
        this.transport.getCar(+this.selectCar.snapshot.params['id']).subscribe(data => {
            this.car = data;
            return this.car;
        });
        return this.car;
    }

    public updateCar(): void {
        console.log(this.car);
        this.transport.updateCar(this.car, this.car.id).subscribe();
        this.router.navigateByUrl('car-list');
    }

    public deleteCar(): void {
        this.transport.deleteCar(+this.selectCar.snapshot.params['id']).subscribe();
        this.router.navigateByUrl('car-list');
    }

    private getBrand() {
        this.transfer.getAllCarList().subscribe(data => {
            for (let i = 0; i < data.length; i++) {
                this.brands[i] = data[i];
            }
            this.getCarModel(this.car.brand);
            return this.brands;
        });
        return this.brands;
    }

    private getCarModel(chioseBrand) {
        for (let i = 0; i < this.brands.length; i++) {
            if (this.brands[i].name === chioseBrand) {
                console.log(this.brands[i].name,
                    this.brands[i].models);
                this.models = this.brands[i].models;
            }
        }
        return this.models;
    }
    public getModels(chioseBrand) {
        console.log(chioseBrand);
        for (let i = 0; i < this.brands.length; i++) {
            if (this.brands[i].name === chioseBrand['value']) {
                console.log(this.brands[i].name,
                    this.brands[i].models);
                this.models = this.brands[i].models;
            }
        }
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
