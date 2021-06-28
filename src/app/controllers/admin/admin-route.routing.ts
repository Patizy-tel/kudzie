import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {UsersComponent} from './Users/Users.component'
import { ResultsComponent } from './results/results.component';
import { GraphslistComponent } from './graphslist/graphslist.component'

const routes : Routes = [

    {
        path:'',
        redirectTo:'results'
    },
 {
        path:'results',
        component:ResultsComponent

    } ,{
        path:'graphs',
        component:GraphslistComponent
    }


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoute {}
