import { Component, Inject, OnInit } from '@angular/core';
import { Router} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  constructor(@Inject('baseUrl') private url: string ,private router: Router) {
    console.log(this.url);
  }


  ngOnInit() {

    if(!sessionStorage.getItem('token')){

      return this.router.navigate(['/login']);

    }
  }


}
