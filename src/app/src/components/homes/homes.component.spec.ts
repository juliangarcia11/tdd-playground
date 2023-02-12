import { ComponentFixture, TestBed } from '@angular/core/testing';

import {spyOnClass} from "jasmine-es6-spies/dist";
import {of} from "rxjs";

import { HomesComponent } from './homes.component';
import {DataService} from "../../services/data.service";

describe('HomesComponent', () => {
  let component: HomesComponent;
  let fixture: ComponentFixture<HomesComponent>;
  let dataService: jasmine.SpyObj<DataService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomesComponent ],
      providers: [
        {provide: DataService, useFactory: () => spyOnClass(DataService)}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomesComponent);
    component = fixture.componentInstance;
  });

  // before each test, get the data service and mock a return of data from the service
  beforeEach(() => {
    dataService = TestBed.get(DataService);
    dataService.getHomes$.and.returnValue(of([
      {
        title: 'Home 1',
        image: './favicon.ico',
        location: 'new york'
      },{
        title: 'Home 2',
        image: './favicon.ico',
        location: 'boston'
      },{
        title: 'Home 3',
        image: './favicon.ico',
        location: 'chicago'
      },
    ]));

    fixture.detectChanges();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show homes', () => {

    const item = fixture.nativeElement.querySelectorAll('[data-test="home"]');
    expect(item.length).toBe(3);

  });

  it('should show home info', () => {

    const item = fixture.nativeElement.querySelector('[data-test="home"]');
    expect(item.querySelector('[data-test="title"]').innerText).toBe('Home 1');
    expect(item.querySelector('[data-test="location"]').innerText).toBe('new york');
    expect(item.querySelector('[data-test="image"]')).toBeTruthy();

  });
});
