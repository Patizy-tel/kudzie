import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({selector: 'app-inspections-list', templateUrl: './inspections-list.component.html', styleUrls: ['./inspections-list.component.scss']})
export class InspectionsListComponent implements OnInit {
    @Output()view = new EventEmitter()
    issues = [
        {
            "id": 1,
            "vehicle": "ABC-2363",
            "user": "Tatenda",
            "failedItems": 8,
            "date": "8/11/2020"
        }, {
            "id": 2,
            "vehicle": "ABT-6474",
            "user": "Takura",
            "failedItems": 11,
            "date": "12/11/2020"
        }, {
            "id": 3,
            "vehicle": "AAH-5343",
            "user": "Daniel",
            "failedItems": 5,
            "date": "2/3/2021"
        }, {
            "id": 4,
            "vehicle": "ABV-7464",
            "user": "Tinashe",
            "failedItems": 3,
            "date": "3/7/2020"
        }, {
            "id": 5,
            "vehicle": "ABF-4636",
            "user": "Kudzai",
            "failedItems": 14,
            "date": "2/7/2020"
        }, {
            "id": 6,
            "vehicle": "AAK-6453",
            "user": "Tongai",
            "failedItems": 3,
            "date": "10/22/2020"
        }, {
            "id": 7,
            "vehicle": "AAS-8585",
            "user": "Matthew",
            "failedItems": 11,
            "date": "10/19/2020"
        }, {
            "id": 8,
            "vehicle": "AAU-6463",
            "user": "Kurayi",
            "failedItems": 5,
            "date": "6/21/2020"
        }, {
            "id": 9,
            "vehicle": "ABV-9800",
            "user": "Akim",
            "failedItems": 3,
            "date": "6/9/2020"
        }, {
            "id": 10,
            "vehicle": "ABR-6453",
            "user": "Kundai",
            "failedItems": 13,
            "date": "1/16/2021"
        }    ]
    constructor() {}

    ngOnInit() {}

}
