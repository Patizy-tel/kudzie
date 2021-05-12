import { Component, OnInit, Input } from '@angular/core';
import {FormGroup} from '@angular/forms'
@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.css']
})
export class VehiclesListComponent implements OnInit {

  @Input() assignDialog: Boolean = false
  assignForm: FormGroup
  constructor() { }
  vehicles = [{
    "registration": "ABC-0899",
    "ec": "EC-801",
    "metre": 523,
    "operator": "Tinotenda",
    "duration": 7,
    "nextDueDate": "03-Aug-2020",
    "time": "2:24 PM",
    "status": true
  }, {
    "registration": "ABC-7983",
    "ec": "EC-039",
    "metre": 573,
    "operator": "Ruth",
    "duration": 2,
    "nextDueDate": "26-Jun-2020",
    "time": "10:48 AM",
    "status": false
  }, {
    "registration": "ABC-2343",
    "ec": "EC-714",
    "metre": 590,
    "operator": "Nyasha",
    "duration": 6,
    "nextDueDate": "05-Feb-2021",
    "time": "3:45 PM",
    "status": true
  }, {
    "registration": "ABC-7882",
    "ec": "EC-973",
    "metre": 525,
    "operator": "Garikai",
    "duration": 2,
    "nextDueDate": "20-Dec-2020",
    "time": "1:02 PM",
    "status": true
  }, {
    "registration": "ABC-8693",
    "ec": "EC-999",
    "metre": 462,
    "operator": "Tonderai",
    "duration": 3,
    "nextDueDate": "10-Jul-2020",
    "time": "11:29 AM",
    "status": false
  }, {
    "registration": "ABC-4410",
    "ec": "EC-797",
    "metre": 146,
    "operator": "Tafadzwa",
    "duration": 4,
    "nextDueDate": "14-May-2020",
    "time": "11:20 AM",
    "status": true
  }, {
    "registration": "ABC-7524",
    "ec": "EC-618",
    "metre": 185,
    "operator": "Tanaka",
    "duration": 6,
    "nextDueDate": "28-Jan-2021",
    "time": "12:59 PM",
    "status": false
  }, {
    "registration": "ABC-9641",
    "ec": "EC-907",
    "metre": 189,
    "operator": "Gamuchirai",
    "duration": 1,
    "nextDueDate": "29-Nov-2020",
    "time": "1:18 PM",
    "status": true
  }, {
    "registration": "ABC-1393",
    "ec": "EC-087",
    "metre": 312,
    "operator": "Memory",
    "duration": 5,
    "nextDueDate": "11-Jul-2020",
    "time": "8:23 AM",
    "status": true
  }, {
    "registration": "ABC-9916",
    "ec": "EC-432",
    "metre": 254,
    "operator": "Takunda",
    "duration": 7,
    "nextDueDate": "23-Mar-2020",
    "time": "10:55 AM",
    "status": false
  }]
  ngOnInit() {
  }

  onSubmit(){

  }

}
