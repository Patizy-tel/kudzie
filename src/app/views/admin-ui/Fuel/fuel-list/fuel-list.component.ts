import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fuel-list',
  templateUrl: './fuel-list.component.html',
  styleUrls: ['./fuel-list.component.scss']
})
export class FuelListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  fuel = [{
    "id": "Puma Lorraine Drive",
    "model": "AAG-6463",
    "time": "12:53 PM",
    "usage": 117,
    "volume": 329,
    "total": 989,
    "price": 887,
    "cost": 610
  }, {
    "id": "Puma Robert Mugabe",
    "model": "AAY-7474",
    "time": "8:12 AM",
    "usage": 244,
    "volume": 432,
    "total": 973,
    "price": 128,
    "cost": 377
  }, {
    "id": "Puma ",
    "model": "AAT-6474",
    "time": "5:29 PM",
    "usage": 106,
    "volume": 601,
    "total": 102,
    "price": 470,
    "cost": 1457
  }]

}
