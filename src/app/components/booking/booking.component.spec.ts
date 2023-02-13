import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BookingComponent} from './booking.component';
import {MockedHomes} from "../../models/homes.mock";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {HomeModel} from "../../models/home.model";

describe('BookingComponent', () => {
  let component: BookingComponent;
  let fixture: ComponentFixture<BookingComponent>;
  let dialogData: { home: HomeModel };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookingComponent],
      providers: [
        {provide: MAT_DIALOG_DATA, useValue: {}}
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingComponent);
    component = fixture.componentInstance;

    // get the starting value for the dialog data
    dialogData = TestBed.get(MAT_DIALOG_DATA);

    // set mock data for dialog
    dialogData.home = MockedHomes[0];

    // update the fixture to pull in mocked data
    fixture.detectChanges();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show title', () => {
    const item = fixture.nativeElement.querySelector('[data-test="title"]');
    expect(item.textContent).toContain('Home 1');
  });

  // should show price per night
  // should show check in date field
  // should show check out date field
  // should show total price
  // should show submit button
  // should book home after clicking the submit button


});
