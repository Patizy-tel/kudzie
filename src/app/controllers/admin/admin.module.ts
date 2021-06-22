import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClarityModule} from '@clr/angular';
import {AdminModule} from '../../views/admin-ui/admin.module'
import {AgmCoreModule} from '@agm/core';
import {AdminRoute} from './admin-route.routing'
import {DashboardComponent} from './dashboard/dashboard.component'
import {UsersComponent} from './Users/Users.component'
import {InsuaranceComponent} from './insuarance/insuarance.component'
@NgModule({
    imports: [
        CommonModule, AdminModule, ClarityModule, AdminRoute, AgmCoreModule.forRoot({apiKey: 'AIzaSyD1MWtAHULMcX32FhTwXegpkwxU9OjBoUQ', libraries: ['places']})
    ],
    declarations: [
        DashboardComponent,
        UsersComponent,
        InsuaranceComponent ,
    ]
})export class AdminDashboardModule {}