import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-renewal-list',
  templateUrl: './vehicle-renewal-list.component.html',
  styleUrls: ['./vehicle-renewal-list.component.css']
})
export class VehicleRenewalListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  reminders = [{
    "id": 1,
    "model": "AAX-4321",
    "schedule": "Emission Test",
    "due": "4/26/2020",
    "last": "2/11/2020",
    "compliance": 88
  }, {
    "id": 2,
    "model": "AAZ-7549",
    "schedule": "Registration",
    "due": "12/9/2020",
    "last": "2/9/2020",
    "compliance": 84
  }, {
    "id": 3,
    "model": "ABN-4346",
    "schedule": "Emission Test",
    "due": "9/30/2020",
    "last": "2/9/2020",
    "compliance": 90
  }, {
    "id": 4,
    "model": "AAD-4743",
    "schedule": "Registration",
    "due": "12/14/2020",
    "last": "2/10/2020",
    "compliance": 81
  }, {
    "id": 5,
    "model": "AAS-4643",
    "schedule": "Registration",
    "due": "8/19/2020",
    "last": "2/9/2020",
    "compliance": 16
  }, {
    "id": 6,
    "model": "ADF-4744",
    "schedule": "Emission Test",
    "due": "12/2/2020",
    "last": "2/11/2020",
    "compliance": 43
  }, {
    "id": 7,
    "model": "ACX-4743",
    "schedule": "Emission Test",
    "due": "4/28/2020",
    "last": "2/9/2020",
    "compliance": 76
  }, {
    "id": 8,
    "model": "AAA-6746",
    "schedule": "Emission Test",
    "due": "11/23/2020",
    "last": "2/11/2020",
    "compliance": 59
  }]


}
