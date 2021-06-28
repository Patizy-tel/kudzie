import { Component, EventEmitter, Input, OnInit, Output,} from '@angular/core';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css'],

})
export class ResultListComponent implements OnInit {
  @Output()view = new EventEmitter();
 
  @Input() total :number
  @Input() levels

  constructor() { }

  ngOnInit(){
  }

}
