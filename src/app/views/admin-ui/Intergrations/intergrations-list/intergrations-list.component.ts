import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({selector: 'app-intergrations-list', templateUrl: './intergrations-list.component.html', styleUrls: ['./intergrations-list.component.scss']})
export class IntergrationsListComponent implements OnInit {

  constructor() { }
  reminders = [{
    "id": 1,
    "account": "3565592444790981",
    "vehiclename": "Suzuki",
    "model": "Vitara",
    "engine": "aah-46764-uiruru",
    "activation": "3/21/2020",
    "expiration": "4/18/2020",
    "active": false
  }, {
    "id": 2,
    "account": "5212780190274753",
    "vehiclename": "Buick",
    "model": "Reatta",
    "engine": "aah-46764-uiruru",
    "activation": "7/14/2020",
    "expiration": "8/11/2020",
    "active": false
  }, {
    "id": 3,
    "account": "5020492741745842",
    "vehiclename": "BMW",
    "model": "X5",
    "engine": "aah-46764-uiruru",
    "activation": "3/9/2020",
    "expiration": "11/16/2020",
    "active": true
  }, {
    "id": 4,
    "account": "3589805866480275",
    "vehiclename": "Ford",
    "model": "E350",
    "engine": "aah-46764-uiruru",
    "activation": "4/9/2020",
    "expiration": "7/27/2020",
    "active": true
  }, {
    "id": 5,
    "account": "3568989650717582",
    "vehiclename": "Subaru",
    "model": "Legacy",
    "engine": "aah-46764-uiruru",
    "activation": "3/23/2020",
    "expiration": "11/15/2020",
    "active": true
  }, {
    "id": 6,
    "account": "56022494122707327",
    "vehiclename": "Dodge",
    "model": "Ram 1500",
    "engine": "aah-46764-uiruru",
    "activation": "2/28/2020",
    "expiration": "2/13/2020",
    "active": true
  }, {
    "id": 7,
    "account": "3531621012474768",
    "vehiclename": "Aston Martin",
    "model": "DB9 Volante",
    "engine": "aah-46764-uiruru",
    "activation": "3/10/2020",
    "expiration": "8/20/2020",
    "active": true
  }, {
    "id": 8,
    "account": "5426247728864713",
    "vehiclename": "Chevrolet",
    "model": "Camaro",
    "engine": "aah-46764-uiruru",
    "activation": "9/7/2020",
    "expiration": "7/19/2020",
    "active": false
  }, {
    "id": 9,
    "account": "3544365639438351",
    "vehiclename": "Infiniti",
    "model": "Q",
    "engine": "aah-46764-uiruru",
    "activation": "2/24/2020",
    "expiration": "2/8/2021",
    "active": true
  }, {
    "id": 10,
    "account": "3561102463690916",
    "vehiclename": "Lincoln",
    "model": "Continental Mark VII",
    "engine": "aah-46764-uiruru",
    "activation": "5/26/2020",
    "expiration": "12/20/2020",
    "active": true
  }, {
    "id": 11,
    "account": "347646679395790",
    "vehiclename": "Cadillac",
    "model": "Seville",
    "engine": "aah-46764-uiruru",
    "activation": "4/23/2020",
    "expiration": "6/28/2020",
    "active": true
  }, {
    "id": 12,
    "account": "3538942401951528",
    "vehiclename": "Spyker",
    "model": "C8 Spyder",
    "engine": "aah-46764-uiruru",
    "activation": "3/18/2020",
    "expiration": "9/21/2020",
    "active": false
  }, {
    "id": 13,
    "account": "3552330568301185",
    "vehiclename": "Honda",
    "model": "CR-V",
    "engine": "aah-46764-uiruru",
    "activation": "5/31/2020",
    "expiration": "12/22/2020",
    "active": true
  }, {
    "id": 14,
    "account": "3549633456327485",
    "vehiclename": "Lamborghini",
    "model": "Gallardo",
    "engine": "aah-46764-uiruru",
    "activation": "7/19/2020",
    "expiration": "9/2/2020",
    "active": true
  }, {
    "id": 15,
    "account": "6395339640931731",
    "vehiclename": "Dodge",
    "model": "Dakota Club",
    "engine": "aah-46764-uiruru",
    "activation": "8/9/2020",
    "expiration": "12/19/2020",
    "active": true
  }, {
    "id": 16,
    "account": "5585949583917406",
    "vehiclename": "Nissan",
    "model": "200SX",
    "engine": "aah-46764-uiruru",
    "activation": "8/8/2020",
    "expiration": "6/17/2020",
    "active": false
  }, {
    "id": 17,
    "account": "3550002106289501",
    "vehiclename": "Nissan",
    "model": "Cube",
    "engine": "aah-46764-uiruru",
    "activation": "1/17/2021",
    "expiration": "9/7/2020",
    "active": true
  }, {
    "id": 18,
    "account": "3568886735915852",
    "vehiclename": "Mercury",
    "model": "Marquis",
    "engine": "aah-46764-uiruru",
    "activation": "6/8/2020",
    "expiration": "4/14/2020",
    "active": true
  }, {
    "id": 19,
    "account": "3571274215837224",
    "vehiclename": "Jaguar",
    "model": "XJ Series",
    "engine": "aah-46764-uiruru",
    "activation": "8/6/2020",
    "expiration": "1/13/2021",
    "active": false
  }, {
    "id": 20,
    "account": "3584124351907742",
    "vehiclename": "Toyota",
    "model": "Tacoma Xtra",
    "engine": "aah-46764-uiruru",
    "activation": "9/26/2020",
    "expiration": "3/22/2020",
    "active": true
  }]

    ngOnInit() {}

}
