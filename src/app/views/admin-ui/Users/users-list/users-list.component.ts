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



    
  }


      }
     

