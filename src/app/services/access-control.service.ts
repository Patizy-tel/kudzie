import {Injectable} from '@angular/core';
import {HttpParams} from '@angular/common/http';
import {ApisService} from './apis.service'
import {environment} from '../../environments/environment'
import {Page ,GroupAuthorities, UserAuthorities} from '../models'
import {Observable} from 'rxjs'
@Injectable({providedIn: 'root'})
export class AccessControlService  {

    constructor(private apis:ApisService) {
   
    }

    getPaginatedAuthorites(filters?: any) {
        const httpParams = new HttpParams({fromObject: filters});
        return this.apis.get <Page<GroupAuthorities>> (`/v1/access-control/authorities`, httpParams);

    }


    getSystemAuthorites(): Observable < any > {
    
      return this.apis.get (`/v1/access-control/authorities/all`)

  }


    postAuthority(Auth:any){

      return this.apis.post(`/v1/access-control/group-authorities`, Auth);

    }


    postUserAuthority(User:any){
      return this.apis.post(`/v1/access-control/user-authorities`, User);

    }



    getpaginatedUserAuthority(id:number|string ,filters?:any){
      const httpParams =  new HttpParams({fromObject:filters}) ;
      return this.apis.get<Page<UserAuthorities>>(`/v1/access-control/user-authorities/by-user/${id}` , httpParams)
    }

}
