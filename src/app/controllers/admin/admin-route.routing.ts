import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {UsersComponent} from './Users/Users.component'

import {InsuaranceComponent} from './insuarance/insuarance.component'
import { InsuaranceDetailComponent } from 'src/app/views/admin-ui/insuarance/insuarance-detail/insuarance-detail.component';

const routes : Routes = [

    {
        path: '',

        component:DashboardComponent
    },
    {
      path:'users',
      component:UsersComponent
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
