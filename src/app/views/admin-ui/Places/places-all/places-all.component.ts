import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-places-all',
  templateUrl: './places-all.component.html',
  styleUrls: ['./places-all.component.scss']
})
export class PlacesAllComponent implements OnInit {

  bookings = [{
    "registration": "ABC-4041",
    "name": "Kudzai",
    "capacity": 2,
    "current": 2,
    "pickup": "Five Avenue",
    "location": "Warren Park",
    "date": "03-Jun-2021",
    "time": "1:06 PM",
    "status": false
  }, {
    "registration": "ABC-7609",
    "name": "Tongayi",
    "capacity": 4,
    "current": 5,
    "pickup": "Tanganda",
    "location": "Norton",
    "date": "27-Jul-2021",
    "time": "10:18 AM",
    "status": false
  }, {
    "registration": "ABC-2420",
    "name": "Tanaka",
    "capacity": 7,
    "current": 4,
    "pickup": "Badza street",
    "location": "Chitungwiza",
    "date": "24-Apr-2021",
    "time": "1:31 PM",
    "status": false
  }, {
    "registration": "ABC-6609",
    "name": "Tafadzwa",
    "capacity": 1,
    "current": 2,
    "pickup": "Baskerville street",
    "location": "Mt Pleasant",
    "date": "24-Jun-2021",
    "time": "1:13 PM",
    "status": true
  }, {
    "registration": "ABC-0065",
    "name": "Takudzwa",
    "capacity": 8,
    "current": 2,
    "pickup": "104th street",
    "location": "Warren Park D",
    "date": "14-Jun-2021",
    "time": "2:22 PM",
    "status": false
  }, {
    "registration": "ABC-2590",
    "name": "Memory",
    "capacity": 8,
    "current": 5,
    "pickup": "23 th street",
    "location": "Highfield",
    "date": "02-Jun-2021",
    "time": "10:15 AM",
    "status": false
  }, {
    "registration": "ABC-2657",
    "name": "Dudzai",
    "capacity": 6,
    "current": 1,
    "pickup": "Muonde",
    "location": "Mufakose",
    "date": "28-Mar-2021",
    "time": "1:36 PM",
    "status": true
  }]

  constructor() { }



  ngOnInit() {
  }

}
