import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClarityModule} from '@clr/angular';
import {AdminModule} from '../../views/admin-ui/admin.module'
import {AgmCoreModule} from '@agm/core';
import {AdminRoute} from './admin-route.routing'
import {DashboardComponent} from './dashboard/dashboard.component'
import {VendorComponent} from './Vendor/Vendor.component'
import {UsersComponent} from './Users/Users.component'
import {VehicleComponent} from './Vehicle/Vehicle.component'
import {FuelComponent} from './Fuel/Fuel.component'
import {IssuesComponent} from './Issues/Issues.component'
import {InspectionComponent} from './Inspection/Inspection.component'
import {PlaceComponent} from './Place/Place.component'
import {ReminderComponent} from './Reminder/Reminder/Reminder.component'
import {VehicleRenewalComponent} from './Reminder/vehicle-renewal/vehicle-renewal.component';
import {ContactRenewalComponent} from './Reminder/contact-renewal/contact-renewal.component';
import {IntergrationsComponent} from './Intergrations/Intergrations.component'
import {InsuaranceComponent} from './insuarance/insuarance.component'
import {BookingComponent} from './Booking/Booking.component'

@NgModule({
    imports: [
        CommonModule, AdminModule, ClarityModule, AdminRoute, AgmCoreModule.forRoot({apiKey: 'AIzaSyD1MWtAHULMcX32FhTwXegpkwxU9OjBoUQ', libraries: ['places']})
    ],
    declarations: [
        DashboardComponent,
        VendorComponent,
        UsersComponent,
        InspectionComponent,
        VehicleComponent,
        IssuesComponent,
        FuelComponent,
        PlaceComponent,
        ReminderComponent,
        VehicleRenewalComponent,
        ContactRenewalComponent,
        IntergrationsComponent,
        InsuaranceComponent ,BookingComponent
    ]
})export class AdminDashboardModule {}