import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getHomes$(): Observable<any[]> {

    // todo add a real HTTP call to get homes
    return of([]);
  }
}
