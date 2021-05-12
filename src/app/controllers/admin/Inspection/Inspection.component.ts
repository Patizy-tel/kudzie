import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Inspection',
  templateUrl: './Inspection.component.html',
  styleUrls: ['./Inspection.component.scss']
})
export class InspectionComponent implements OnInit {

  constructor( private  router:Router) { }

  ngOnInit() {
  }


  viewMore(x){

    this
    .router
    .navigate([`admin/detail-inspections/${x}`]);



  }

}
