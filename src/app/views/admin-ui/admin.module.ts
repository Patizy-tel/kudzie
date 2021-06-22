import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ClarityModule} from '@clr/angular';
import { NgApexchartsModule } from "ng-apexcharts";
import {RouterModule} from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import {MainPageComponent} from './main-page/main-page.component';
import {HelperModule} from '../../helper/helper.module';
import {LayoutComponent} from './layout/layout.component';
import {UsersListComponent} from "./Users/users-list/users-list.component"
import {UsersFormComponent} from './Users/users-form/users-form.component';
import {InsuranceListComponent} from './insuarance/insurance-list/insurance-list.component';
import {BookingFormComponent} from './Booking/booking-form/booking-form.component'
import {InsuaranceDetailComponent} from './insuarance/insuarance-detail/insuarance-detail.component'
import {FuelFormComponent} from './Fuel/fuel-form/fuel-form.component'

@NgModule({
    imports: [

        CommonModule,
        HelperModule,
        FormsModule,
        ReactiveFormsModule,
        ClarityModule,
        NgApexchartsModule,
        RouterModule ,AgmCoreModule

    ],

    declarations: [
        MainPageComponent,
        LayoutComponent,
        UsersFormComponent,
        UsersListComponent,
        BookingFormComponent,
        InsuranceListComponent ,InsuaranceDetailComponent
        ,FuelFormComponent
     
    ] ,

    exports: [
        MainPageComponent,
        LayoutComponent,
     
        UsersFormComponent,
        UsersListComponent,
        BookingFormComponent,
        FuelFormComponent,
        InsuranceListComponent ,InsuaranceDetailComponent ,
       
    ]
})

export class AdminModule {}