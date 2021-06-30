import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
