import {Component, OnInit} from '@angular/core';

@Component({selector: 'app-places-list', templateUrl: './places-list.component.html', styleUrls: ['./places-list.component.scss']})
export class PlacesListComponent implements OnInit {

    id : number;
    answer = []
    load = false
    arrayCoodinates : any = [
        {
            lat: -18.820770,
            long: 29.125491,
            name:"suzuki ABD-24324"
        }, {
            lat: -18.820770,
            long: 29.325491 , name:"suzuki ABD-24324"
        }, {
            lat: -18.820770,
            long: 29.525491 , name:"suzuki ABT-2324"
        }, {
            lat: -18.820770,
            long: 29.325491 , name:"suzuki ABD-24324"
        }, {
            lat: -18.820770,
            long: 29.725491 , name:"suzuki ABD-24324"
        }, {
            lat: -20.820770,
            long: 29.825491 , name:"suzuki ABD-24324"
        }, {
            lat: -19.820770,
            long: 29.825491, name:"suzuki ABD-24324"
        }, {
            lat: -13.820770,
            long: 29.825491 , name:"suzuki ABD-24324"
        }
    ];
    lat = -18.820770;
    long = 29.825491;

    zoom = 7;

    constructor() {}

    ngOnInit() {}

}
