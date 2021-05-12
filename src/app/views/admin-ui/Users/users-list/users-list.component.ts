import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users = [{"id":1,"name":"Kudzai","phone":"302-436-1472","email":"kudzi@xrea.com","status":false,"date":"3/8/2020"},
  {"id":2,"name":"Tanaka","phone":"617-150-7541","email":"tanaka@umn.edu","status":true,"date":"1/17/2021"},
  {"id":3,"name":"Tafadzwa","phone":"963-227-0791","email":"tafazwa@wikispaces.com","status":false,"date":"12/19/2020"},
  {"id":4,"name":"Tinashe","phone":"769-877-8762","email":"tinashe@hostgator.com","status":true,"date":"7/30/2020"},
  ]
  constructor() { }

  ngOnInit() {
  }

}
