import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({selector: 'app-booking-list', templateUrl: './booking-list.component.html', styleUrls: ['./booking-list.component.scss']})
export class BookingListComponent implements OnInit {

    constructor() {}

    @Output()view = new EventEmitter()

    bookings = [{
      "id":1,
      "registration": "ABC-4041",
      "name": "Kudzai",
      "capacity": 2,
      "current": 2,
      "pickup": "Five Avenue",
      "location": "Warren Park",
      "date": "03-Jun-2021",
      "time": "1:06 PM",
      "status": false ,
      "pending":3
    }, {
      "id":2,
      "registration": "ABC-7609",
      "name": "Tongayi",
      "capacity": 4,
      "current": 5,
      "pickup": "Tanganda",
      "location": "Norton",
      "date": "27-Jul-2021",
      "time": "10:18 AM",
      "status": !false ,
      "pending":4
    }, {

      "id":3,
      "registration": "ABC-2420",
      "name": "Tanaka",
      "capacity": 7,
      "current": 4,
      "pickup": "Badza street",
      "location": "Chitungwiza",
      "date": "24-Apr-2021",
      "time": "1:31 PM",
      "status": !false ,
      "pending":3
    }, {

      "id":4,
      "registration": "ABC-6609",
      "name": "Tafadzwa",
      "capacity": 1,
      "current": 2,
      "pickup": "Baskerville street",
      "location": "Mt Pleasant",
      "date": "24-Jun-2021",
      "time": "1:13 PM",
      "status": !true ,
      "pending":7
    }, {

      "id":5,
      "registration": "ABC-0065",
      "name": "Takudzwa",
      "capacity": 8,
      "current": 2,
      "pickup": "104th street",
      "location": "Warren Park D",
      "date": "14-Jun-2021",
      "time": "2:22 PM",
      "status": !false ,
      "pending":1
    }, {

      "id":6,
      "registration": "ABC-2590",
      "name": "Memory",
      "capacity": 8,
      "current": 5,
      "pickup": "23 th street",
      "location": "Highfield",
      "date": "02-Jun-2021",
      "time": "10:15 AM",
      "status": !false ,
      "pending":6
    }, {

      "id":7,
      "registration": "ABC-2657",
      "name": "Dudzai",
      "capacity": 6,
      "current": 1,
      "pickup": "Muonde",
      "location": "Mufakose",
      "date": "28-Mar-2021",
      "time": "1:36 PM",
      "status": true ,
      "pending":5
    }]
    ngOnInit() {}

}
