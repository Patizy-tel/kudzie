import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { AuthService } from 'src/app/services';

@Component({selector: 'app-insurance-list', templateUrl: './insurance-list.component.html', styleUrls: ['./insurance-list.component.scss']})
export class InsuranceListComponent implements OnInit {
    @Output()view = new EventEmitter();
 
    @Input() total :number
    @Input() levels
 
    constructor(private routeSerice:AuthService) {}

    ngOnInit() {}



    del(){

    }

}
