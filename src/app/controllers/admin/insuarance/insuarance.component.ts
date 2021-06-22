import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClrDatagridStateInterface } from '@clr/angular';
import { Utilities } from 'src/app/models';
import { AuthService } from 'src/app/services';

@Component({
  selector: 'app-insuarance',
  templateUrl: './insuarance.component.html',
  styleUrls: ['./insuarance.component.scss']
})
export class InsuaranceComponent implements OnInit {

  constructor(private  router:Router , private patientService :AuthService) { } ;
  total: any;
  schools: any;
  levels: any;


  ngOnInit() {

    this.getLevels({})
  }


  
  viewMore(x){
    sessionStorage.setItem('theid',x._id);
    sessionStorage.setItem('theemail',x.email);
    this
    .router
    .navigate([`admin/detail-patients/${x._id}`]);

  }



  postPatient(patient){
     this.patientService.postPatient(patient) 
                        .subscribe(resp=>{

                          alert('success')
                        })

  }











   public  getLevels(state:ClrDatagridStateInterface){


    this.patientService.getAllpaitns((Utilities.formatDatagridState(state, state.page
      ? state.page.from / state.page.size
      : 0))).subscribe((resp:any) =>{

                  console.log(resp);
          this.total = resp.length;
          this.levels= resp


         
      })





   }}



