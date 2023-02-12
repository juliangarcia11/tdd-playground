import { Component } from '@angular/core';
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.scss']
})
export class HomesComponent {

  homes$: Observable<any> | undefined;

  ngOnInit() {
    // this.homes$ = this.dataService.getHomes$();
    this.homes$ = of([
      {
        title: 'Home 1',
        image: 'image 1',
        location: 'new york'
      },{
        title: 'Home 2',
        image: 'image 2',
        location: 'boston'
      },{
        title: 'Home 3',
        image: 'image 3',
        location: 'chicago'
      },
    ])
  }
}
