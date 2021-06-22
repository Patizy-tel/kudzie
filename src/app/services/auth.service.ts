import {Injectable, Inject} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs'
import {ApisService} from './apis.service'
import {Router, ActivatedRoute} from '@angular/router'
import jwt_decode from 'jwt-decode';
import { AlertService } from './alert.service';
import { Page, GroupAuthorities } from '../models';

@Injectable({providedIn: 'root'})
export class AuthService {

    url;

    constructor(private apis : ApisService, private router : Router ,private alerts:AlertService) {}

    Login(auth) : Observable < any > {
        return this
            .apis
            .post(`/authenticate`, auth)
    }

    decodeToken(x : string) {

        this.alerts.success("Nice ✔👌")

        sessionStorage.setItem('token', x)

        sessionStorage.setItem('role',"ROLE_ADMIN" )
        return this
            .router
            .navigate(['/admin/patients']);
 /*       const decode :any = jwt_decode(x)
        let {authorities} = decode
        authorities.map(y => {


            if(y.authority != "ROLE_ADMIN"){

                this.alerts.error("Sorry 😒Only Admins Can Login In")


            }else{


                this.alerts.success("Nice ✔👌")
                sessionStorage.setItem('role', y.authority)
                return this
                    .router
                    .navigate(['/admin']);


            }
          

        })*/

    }

    forgotPassword(forg) {

        return this
            .apis
            .post(`/v1/users/forgot-password`, forg)

    }

    UpdatePassword(updates) {

        return this
            .apis
            .post(`/v1/users/update-password`, updates)

    }


    postPatient(patient) {
        return this.apis.post('/api/patients',patient);

    }


    getAllpaitns(filters:any){


        const httpParams = new HttpParams({fromObject: filters});
        return this.apis.get <Page<GroupAuthorities>> (`/api/patients`, httpParams);


    }


    postNotes(notes){


        return this.apis.post('/api/notes',notes);


    }


    getAllNotes( id,filters:any){


        const httpParams = new HttpParams({fromObject: filters});
        return this.apis.get <Page<GroupAuthorities>> (`/api/notes/${id}`, httpParams);
    }




    postEmail(mdsg){
         return this.apis.post('/api/sendemail',mdsg)
    }
}
