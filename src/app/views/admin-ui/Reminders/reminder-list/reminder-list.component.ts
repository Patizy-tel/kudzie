import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reminder-list',
  templateUrl: './reminder-list.component.html',
  styleUrls: ['./reminder-list.component.css']
})
export class ReminderListComponent implements OnInit {

  constructor() { }
  reminders = [{
    "id": 1,
    "model": "AAB-6453",
    "schedule": "4/7/2020",
    "due": "4/26/2020",
    "last": "2/11/2020",
    "compliance": 88,
    "time": "1:36 PM"
  }, {
    "id": 2,
    "model": "AAC-6574",
    "schedule": "2/5/2021",
    "due": "12/9/2020",
    "last": "2/9/2020",
    "compliance": 84,
    "time": "1:36 PM"
  }, {
    "id": 3,
    "model": "AAS-7565",
    "schedule": "5/3/2020",
    "due": "9/30/2020",
    "last": "2/9/2020",
    "compliance": 90,
    "time": "1:36 PM"
  }, {
    "id": 4,
    "model": "ATR-6465",
    "schedule": "5/15/2020",
    "due": "12/14/2020",
    "last": "2/10/2020",
    "compliance": 81,
    "time": "2:36 PM"
  }, {
    "id": 5,
    "model": "ACE-4664",
    "schedule": "4/29/2020",
    "due": "8/19/2020",
    "last": "2/9/2020",
    "compliance": 16,
    "time": "1:36 PM"
  }, {
    "id": 6,
    "model": "AFC-4643",
    "schedule": "4/29/2020",
    "due": "12/2/2020",
    "last": "2/11/2020",
    "compliance": 43,
    "time": "11:30 PM"
  }, {
    "id": 7,
    "model": "ACX-4533",
    "schedule": "8/3/2020",
    "due": "4/28/2020",
    "last": "2/9/2020",
    "compliance": 76,
    "time": "12:30 PM"
  }, {
    "id": 8,
    "model": "ADK-4352",
    "schedule": "2/18/2020",
    "due": "11/23/2020",
    "last": "2/11/2020",
    "compliance": 59,
    "time": "1:36 PM"
  }]
  ngOnInit() {
  }

}
