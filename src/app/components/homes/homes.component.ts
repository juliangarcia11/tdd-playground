import {Component, OnInit} from '@angular/core';
import {Observable, of} from "rxjs";
import {DataService} from "../../services/data.service";
import {DialogService} from "../../services/dialog.service";

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.scss']
})
export class HomesComponent implements OnInit {

  homes$: Observable<any> | undefined;

  constructor(
    private dataService: DataService,
    private dialogService: DialogService,
  ) {
  }

  ngOnInit() {
    this.homes$ = this.dataService.getHomes$();
  }

  /**
   * Ask the DialogService to open the Booking Dialog
   */
  openDialog() {
    this.dialogService.open();
  }
}
