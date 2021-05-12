import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Booking',
  templateUrl: './Booking.component.html',
  styleUrls: ['./Booking.component.scss']
})
export class BookingComponent implements OnInit {

  constructor(private  router:Router) { }

  ngOnInit() {
  }


  view(x){


    console.log(x)

    this
    .router
    .navigate([`admin/bookings/${x}`]);






  }

}
