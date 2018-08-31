import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import {InMemoryDataService} from './services/InMemoryData/InMemoryData.service';
import {MaterialModule} from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {CarListComponent} from './car-list/car-list.component';

import {AddCarComponent} from './add-car/add-car.component';
import {CarItemComponent} from './car-item/car-item.component';
import {RegistrationComponent} from './registration/registration.component';
import {AuthGuard} from './guards/auth.guard';
import {MyInterceptor} from './interceptors/my-interceptor';

const appRoutes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: '', component: CarListComponent, canActivate: [AuthGuard]},
    {path: 'add-car', component: AddCarComponent, canActivate: [AuthGuard]},
    {path: 'car-item/:id', component: CarItemComponent, canActivate: [AuthGuard]},
    {path: 'registration', component: RegistrationComponent},
];

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        CarListComponent,
        AddCarComponent,
        CarItemComponent,
        RegistrationComponent,
    ],
    imports: [
        MaterialModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}),
        RouterModule.forRoot(appRoutes),

    ],
    providers: [InMemoryDataService, AuthGuard,
        {provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true}
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}
