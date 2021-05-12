import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import {AuthRouteRoutes} from './auth-route.routing'
import { LoginModule}  from '../../views/login-ui/login.module'

@NgModule({
  imports: [
    CommonModule ,
    AuthRouteRoutes
    ,LoginModule
  ],
  declarations: [AuthComponent ,]
})
export class AuthModule { }
