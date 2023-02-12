import {Component, OnInit} from '@angular/core';
import {Observable, of} from "rxjs";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.scss']
})
export class HomesComponent implements OnInit {

  homes$: Observable<any> | undefined;

  constructor(
    private dataService: DataService
  ) {
  }

  ngOnInit() {
    this.homes$ = this.dataService.getHomes$();
    // this.homes$ = of([
    //   {
    //     title: 'Home 1',
    //     image: './favicon.ico',
    //     location: 'new york'
    //   },{
    //     title: 'Home 2',
    //     image: './favicon.ico',
    //     location: 'boston'
    //   },{
    //     title: 'Home 3',
    //     image: './favicon.ico',
    //     location: 'chicago'
    //   },
    // ])
  }
}
