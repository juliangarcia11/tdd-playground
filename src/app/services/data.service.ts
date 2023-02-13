import { Injectable } from '@angular/core';
import {map, Observable, of, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {HomeModel} from "../models/home.model";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private httpClient: HttpClient
  ) { }

  /**
   * Get the homes.json file data
   * @returns Observable<HomeModel[]>
   */
  getHomes$(): Observable<HomeModel[]> {
    return this.httpClient.get<any>('assets/homes.json').pipe(
      map((homes: any[]) => homes.map(h => new HomeModel(h)))
    );
  }
}
