import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-renewal-list',
  templateUrl: './contact-renewal-list.component.html',
  styleUrls: ['./contact-renewal-list.component.css']
})
export class ContactRenewalListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  reminders = [{
    "id": 1,
    "contact": "Tafara",
    "renewaltype": "License renewal",
    "nextDueDate": "7/7/2020"
  }, {
    "id": 2,
    "contact": "Garikai",
    "renewaltype": "License renewal",
    "nextDueDate": "1/8/2021"
  }, {
    "id": 3,
    "contact": "Kundai",
    "renewaltype": "License renewal",
    "nextDueDate": "10/17/2020"
  }, {
    "id": 4,
    "contact": "Tinashe",
    "renewaltype": "License renewal",
    "nextDueDate": "1/27/2021"
  }, {
    "id": 5,
    "contact": "Kudzanai",
    "renewaltype": "Certification",
    "nextDueDate": "5/29/2020"
  }, {
    "id": 6,
    "contact": "Takudzwa",
    "renewaltype": "Certification",
    "nextDueDate": "9/6/2020"
  }, {
    "id": 7,
    "contact": "Tendayi",
    "renewaltype": "License renewal",
    "nextDueDate": "8/14/2020"
  }]
}
