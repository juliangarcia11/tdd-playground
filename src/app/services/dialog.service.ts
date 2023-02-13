import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor() { }

  /**
   * TODO
   *  Stub function
   */
  open(): Observable<any> {
    console.log('DIALOG SERVICE OPEN');
    return of();
  }
}
