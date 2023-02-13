import { Injectable } from '@angular/core';

/**
 * See: https://github.com/chubin/wttr.in
 */

@Injectable({
  providedIn: 'root'
})
export class WttrService {

  private apiBaseUrl: string = 'https://wttr.in/';
  private jsonFormat: string = '?format=j1';

  constructor() { }
}
