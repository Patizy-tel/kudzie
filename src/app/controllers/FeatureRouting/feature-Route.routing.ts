import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LayoutComponent} from '../../views/admin-ui/layout/layout.component';
import { AuthGuard } from 'src/app/helper/auth-guard.service';
const routes : Routes = [
    {
        path: '',
        loadChildren: () => import ('../auth/auth.module').then((mod) => mod.AuthModule)
    },

    {

        path: 'admin',
      //  canActivate: [AuthGuard],
        component: LayoutComponent,
        loadChildren: () => import ('../admin/admin.module').then((mod) => mod.AdminDashboardModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class FeatureShellRouteRoutes {}
