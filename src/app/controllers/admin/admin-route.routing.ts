import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component'
import{VendorComponent } from './Vendor/Vendor.component'
import {UsersComponent} from './Users/Users.component'
import { VehicleComponent } from './Vehicle/Vehicle.component';
import {FuelComponent} from './Fuel/Fuel.component'
import {IssuesComponent} from './Issues/Issues.component'
import {BookingComponent}  from './Booking/Booking.component'
import { InspectionComponent } from './Inspection/Inspection.component';
import { DetailedInspectionsComponent } from 'src/app/views/admin-ui/inspections/detailed-inspections/detailed-inspections.component';
import {PlaceComponent} from './Place/Place.component'
import {ReminderComponent} from './Reminder/Reminder/Reminder.component'
import {VehicleRenewalComponent}  from './Reminder/vehicle-renewal/vehicle-renewal.component'
import {ContactRenewalComponent} from './Reminder/contact-renewal/contact-renewal.component'
import {IntergrationsComponent} from './Intergrations/Intergrations.component'
import {InsuaranceComponent} from './insuarance/insuarance.component'
import { InsuaranceDetailComponent } from 'src/app/views/admin-ui/insuarance/insuarance-detail/insuarance-detail.component';
import { PlacesAllComponent } from 'src/app/views/admin-ui/Places/places-all/places-all.component';
import { BookingDetailComponent } from 'src/app/views/admin-ui/Booking/booking-detail/booking-detail.component';
import { BookingFormComponent } from 'src/app/views/admin-ui/Booking/booking-form/booking-form.component';
const routes : Routes = [

    {
        path: '',

        component:DashboardComponent
    },

    {
        path:'vehicles',
        component:VehicleComponent
      },{


        path:"bookings",
        component:BookingComponent

      }
, {
 path:'bookings/:id',
 component:BookingDetailComponent
},{
  path:'newbook',
  component:BookingFormComponent
},

    {

        path:'inspections',
        component:InspectionComponent
    },{



        path:'detail-inspections/:id',
        component:DetailedInspectionsComponent
    }
    ,

    {

        path:'issues',
        component:IssuesComponent

    },
    {

        path:'vendors',
        component:VendorComponent
    },
    {
      path:'users',
      component:UsersComponent
    },
    {
      path:'fuel',
      component: FuelComponent
    },
    {
      path:'places',
      component: PlaceComponent
    },


    {
      path:'places/all',
      component:PlacesAllComponent
    },
    {
      path: 'reminders',
      component: ReminderComponent
    },
    {
      path: 'vehicle-renewals',
      component: VehicleRenewalComponent
    },
    {
      path: 'contact-renewals',
      component: ContactRenewalComponent
    } ,
    
    {


        path:'intergrations',
        component:IntergrationsComponent
    },
    
    {


        path:'insuarance',
        component:InsuaranceComponent
    } ,{



        path:'detail-insuarances/:id',
        component:InsuaranceDetailComponent
    }


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoute {}
