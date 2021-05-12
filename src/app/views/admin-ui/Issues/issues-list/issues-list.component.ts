import {Component, OnInit} from '@angular/core';

@Component({selector: 'app-issues-list', templateUrl: './issues-list.component.html', styleUrls: ['./issues-list.component.scss']})
export class IssuesListComponent implements OnInit {

    issues = [
        {
            "id": 1,
            "vehicle": "AAH-6653",
            "issueNumber": "9.8.7",
            "summary": "Head lights",
            "status": true,
            "date": "6/24/2020",
            "assigned": "Tendai",
            "reportedDate": "1/23/2021",
            "updatedDate": "4/21/2020"
        }, {
            "id": 2,
            "vehicle": "AAY-7643",
            "issueNumber": "0.8.2",
            "summary": "Oil filter",
            "status": false,
            "date": "2/4/2021",
            "assigned": "Takura",
            "reportedDate": "9/21/2020",
            "updatedDate": "2/14/2020"
        }, {
            "id": 3,
            "vehicle": "AST-6437",
            "issueNumber": "6.61",
            "summary": "Tyres",
            "status": false,
            "date": "5/28/2020",
            "assigned": "Tanaka",
            "reportedDate": "6/4/2020",
            "updatedDate": "2/21/2020"
        }, {
            "id": 4,
            "vehicle": "AAB-7464",
            "issueNumber": "8.4.0",
            "summary": "Petro Pump",
            "status": undefined,
            "date": "7/29/2020",
            "assigned": "Tamuka",
            "reportedDate": "7/15/2020",
            "updatedDate": "1/14/2021"
        }    ]
    constructor() {}

    ngOnInit() {}

}
