import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClarityModule} from '@clr/angular';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import {HelperModule} from '../../helper/helper.module';
import {LoginPageComponent} from './login-page/login-page.component';

import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule, ReactiveFormsModule, FormsModule, HelperModule, ClarityModule ,RouterModule
    ],
    exports: [LoginPageComponent , ],
    declarations: [LoginPageComponent , ]
})
export class LoginModule {}
