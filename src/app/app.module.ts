import { BrowserModule,  } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule} from '@angular/core';
import { FormsModule  } from '@angular/forms';
import { HttpClientModule  ,HTTP_INTERCEPTORS} from '@angular/common/http';
import { JwtInterceptor,} from './helper/jwt.interceptor';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { ClarityModule } from '@clr/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';

import { LoginModule } from './views/login-ui/login.module';
import { AdminModule } from './views/admin-ui/admin.module';
import { AuthGuard } from './helper/auth-guard.service';
import { AlertService} from './services';
import { PageNotFoundComponent } from './views/page-not-found-ui/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  HttpClientModule,
    ClarityModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LoginModule,
    AdminModule,
    ClarityModule,

  ],
  providers: [
    AuthGuard,
    AlertService,
   
    { provide: 'baseUrl', useValue: environment.apiUrl },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },

  ],

  bootstrap: [AppComponent],

})
export class AppModule { }
