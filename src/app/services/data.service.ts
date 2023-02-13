import { Injectable } from '@angular/core';
import {Observable, of, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getHomes$(): Observable<any> {

    return this.httpClient.get<any>('assets/homes.json').pipe(tap(r => console.log('tapped assets', r)));
  }
}
