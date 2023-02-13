import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {HomeModel} from "../../models/home.model";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { home: HomeModel }
  ) { }

  ngOnInit(): void {
    console.log('booking component', {data: this.data});
  }
}
