import {Component, OnInit} from '@angular/core';
import {AuthService, AlertService} from '../../services'
import {Observable} from 'rxjs';
import {Router} from '@angular/router'

@Component({selector: 'app-auth', templateUrl: './auth.component.html', styleUrls: ['./auth.component.scss']})
export class AuthComponent implements OnInit {

    constructor(private auth : AuthService, private alert : AlertService, private router : Router) {}

    public loading = false

    ngOnInit() {

        if (sessionStorage.getItem('token')) {

            return this
                .router
                .navigate(['/admin']);

        }
    }

    login(e) {

        this.loading = true

        console.log(e)

        if(e.username === 'sysadmin' && e.password === 'admin@123'){

            this
            .auth
            .decodeToken("e.jwtToken")


        }else{

            
            this
            .alert
            .error('Incorrect Credentials')
            this.loading = false

        }

      


   /*     this
            .auth
            .Login(e)
            .subscribe((e) => {

                this
                    .auth
                    .decodeToken(e.jwtToken)

            }, (x) => {

                this
                    .alert
                    .error(x.error.message)
                this.loading = false

            })*/

    }

}
