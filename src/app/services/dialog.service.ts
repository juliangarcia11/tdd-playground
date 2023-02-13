import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {ComponentType} from "@angular/cdk/overlay";

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(
    public dialog: MatDialog
  ) { }

  /**
   * TODO
   *  Stub function
   */
  open(dialogComponent: ComponentType<unknown>, data: {}): void {
    console.log('DIALOG SERVICE OPEN');
    const dialogRef = this.dialog.open(dialogComponent, data);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
