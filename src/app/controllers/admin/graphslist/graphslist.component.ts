import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-graphslist',
  templateUrl: './graphslist.component.html',
  styleUrls: ['./graphslist.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GraphslistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
