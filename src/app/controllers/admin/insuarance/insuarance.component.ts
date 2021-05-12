import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insuarance',
  templateUrl: './insuarance.component.html',
  styleUrls: ['./insuarance.component.scss']
})
export class InsuaranceComponent implements OnInit {

  constructor(private  router:Router) { }

  ngOnInit() {
  }


  
  viewMore(x){

    this
    .router
    .navigate([`admin/detail-insuarances/${x}`]);



  }
}
