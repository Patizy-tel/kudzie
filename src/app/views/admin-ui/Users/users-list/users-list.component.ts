import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ClrDatagridStateInterface } from '@clr/angular';
import { Utilities } from 'src/app/models';
import { AuthService } from 'src/app/services';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  @Output() updatedState = new EventEmitter<ClrDatagridStateInterface>()
  @Input() total :number
  @Input() levels :[]
 
  constructor(private notesSerices:AuthService) { }

  ngOnInit() {

    this.getLevels({})


    
  }


  
  public  getLevels(state:ClrDatagridStateInterface){

    let id  = sessionStorage.getItem('theid')
       this.notesSerices.getAllNotes(id,(Utilities.formatDatagridState(state, state.page
         ? state.page.from / state.page.size
         : 0))).subscribe((resp:any) =>{
   
                     console.log(resp);
             this.total = resp.length;
             this.levels= resp
   
   
            
         })
   
   
   
   
   
      }
     

}
