import { Component, OnInit } from '@angular/core';
import { ClrDatagridStateInterface } from '@clr/angular';
import { Utilities } from 'src/app/models';
import { AuthService } from 'src/app/services';

@Component({
  selector: 'app-Users',
  templateUrl: './Users.component.html',
  styleUrls: ['./Users.component.scss']
})
export class UsersComponent implements OnInit {
  total: any;
  levels: any;

  constructor( private patientService:AuthService) { }

  ngOnInit() {


    this.getLevels({})
  }

  public  getLevels(state:ClrDatagridStateInterface){

 let id  = sessionStorage.getItem('theid')
    this.patientService.getAllNotes(id,(Utilities.formatDatagridState(state, state.page
      ? state.page.from / state.page.size
      : 0))).subscribe((resp:any) =>{

                  console.log(resp + " results loadinf");
          this.total = resp.length;
          this.levels= resp


         
      })





   }
  
  
  }


