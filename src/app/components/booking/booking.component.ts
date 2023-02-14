import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {HomeModel} from "../../models/home.model";
import * as moment from "moment";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  checkIn?: Date;
  checkOut?: Date;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { home: HomeModel }
  ) { }

  ngOnInit(): void { }

  /**
   * Given a checkIn & checkOut, calculate the total price for booking
   * a stay at this.data.home
   * @param checkIn   Date Defaults to today
   * @param checkOut  Date Defaults to today
   */
  calculateTotalPrice(checkIn: Date = moment().toDate(), checkOut: Date = moment().toDate()): number {
    // create moment objects
    let checkInDate = moment(checkIn, 'MM-DD-YYYY');
    let checkOutDate = moment(checkOut, 'MM-DD-YYYY');

    // calculate how many nights between checkIn and checkOut
    let nights = checkOutDate.diff(checkInDate, 'days');

    // return the multiplied the number of nights by the price
    return nights * this.data.home.price_nightly;
  }
}
