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
import {VendorsListComponent} from "./Vendors/vendors-list/vendors-list.component";
import {VendorsFormComponent} from './Vendors/vendors-form/vendors-form.component'
import {UsersListComponent} from "./Users/users-list/users-list.component"
import {UsersFormComponent} from './Users/users-form/users-form.component'
import {VehiclesListComponent} from './Vehicles/vehicles-list/vehicles-list.component'
import {VehiclesFormComponent} from './Vehicles/vehicles-form/vehicles-form.component'
import {IssuesListComponent} from './Issues/issues-list/issues-list.component'
import {IssuesFormComponent} from './Issues/issues-form/issues-form.component'
import {InspectionsListComponent} from './inspections/inspections-list/inspections-list.component';
import {InspectionFormComponent} from './inspections/inspection-form/inspection-form.component'
import {DetailedInspectionsComponent} from './inspections/detailed-inspections/detailed-inspections.component'
import {FuelListComponent} from './Fuel/fuel-list/fuel-list.component'
import {FuelFormComponent} from './Fuel/fuel-form/fuel-form.component'
import {PlacesListComponent} from './Places/places-list/places-list.component'
import {PlacesFormComponent} from './Places/places-form/places-form.component'
import {PlacesAllComponent} from './Places/places-all/places-all.component'
import {BookingListComponent} from './Booking/booking-list/booking-list.component'
import {ReminderListComponent} from './Reminders/reminder-list/reminder-list.component'
import {ReminderFormComponent} from './Reminders/reminder-form/reminder-form.component'
import {VehicleRenewalFormComponent} from './Reminders/vehicle-renewal-form/vehicle-renewal-form.component'
import {VehicleRenewalListComponent} from './Reminders/vehicle-renewal-list/vehicle-renewal-list.component'
import {ContactRenewalFormComponent} from './Reminders/contact-renewal-form/contact-renewal-form.component'
import {ContactRenewalListComponent} from './Reminders/contact-renewal-list/contact-renewal-list.component'
import {IntergrationsListComponent} from './Intergrations/intergrations-list/intergrations-list.component'
import {InsuranceListComponent} from './insuarance/insurance-list/insurance-list.component'
import {InsuaranceDetailComponent} from './insuarance/insuarance-detail/insuarance-detail.component'
import {BookingDetailComponent} from './Booking/booking-detail/booking-detail.component'
import {BookingFormComponent} from './Booking/booking-form/booking-form.component'
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
        VendorsListComponent,
        VendorsFormComponent,
        UsersFormComponent,
        UsersListComponent,
        VehicleRenewalFormComponent,
        VehicleRenewalListComponent,
        VehiclesFormComponent,
        VehiclesListComponent,
        IssuesFormComponent,
        IssuesListComponent,
        InspectionFormComponent,
        InspectionsListComponent,
        DetailedInspectionsComponent,
        FuelFormComponent,
        FuelListComponent,
        PlacesFormComponent,
        PlacesListComponent,
        BookingListComponent,
        ReminderFormComponent ,
        ReminderListComponent ,
        ContactRenewalFormComponent ,
        ContactRenewalListComponent ,
        IntergrationsListComponent ,
        InsuranceListComponent ,InsuaranceDetailComponent,
        PlacesAllComponent ,
        BookingDetailComponent ,
        BookingFormComponent
    ] ,

    exports: [
        MainPageComponent,
        LayoutComponent,
        VendorsListComponent,
        VendorsFormComponent,
        UsersFormComponent,
        UsersListComponent,
        VehicleRenewalFormComponent,
        VehicleRenewalListComponent,
        VehiclesFormComponent,
        VehiclesListComponent,
        IssuesFormComponent,
        IssuesListComponent,
        InspectionFormComponent,
        InspectionsListComponent,
        DetailedInspectionsComponent,
        FuelFormComponent,
        FuelListComponent,
        PlacesFormComponent,
        PlacesListComponent,
        BookingListComponent,
        ReminderFormComponent ,
        ReminderListComponent ,
        ContactRenewalFormComponent ,
        ContactRenewalListComponent ,
        IntergrationsListComponent ,
        InsuranceListComponent ,InsuaranceDetailComponent ,
        PlacesAllComponent ,
        BookingDetailComponent ,
        BookingFormComponent
    ]
})export class AdminModule {}