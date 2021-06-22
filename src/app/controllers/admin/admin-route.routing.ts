import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {UsersComponent} from './Users/Users.component'

import {InsuaranceComponent} from './insuarance/insuarance.component'
import { InsuaranceDetailComponent } from 'src/app/views/admin-ui/insuarance/insuarance-detail/insuarance-detail.component';

const routes : Routes = [

    {
        path: '',
        redirectTo:'patients',
        component:DashboardComponent
    },
    {
      path:'users',
      component:UsersComponent
    },
    
    
    {


        path:'patients',
        component:InsuaranceComponent
    } ,{



        path:'detail-patients/:id',
        component:InsuaranceDetailComponent
    }


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoute {}
