import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BookingComponent} from './booking.component';
import {MockedHomes} from "../../models/homes.mock";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {HomeModel} from "../../models/home.model";


describe('BookingComponent', () => {
  let component: BookingComponent;
  let fixture: ComponentFixture<BookingComponent>;
  let dialogData: { home: HomeModel };

  const elGrabber = (selector: string) => fixture.nativeElement.querySelector(selector);


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

  // [x] should show price per night
  // [x] should show check in date field
  // [x] should show check out date field
  // [ ] should show total price
  // [ ] should show submit button
  // [ ] should book home after clicking the submit button

  it('should show title', () => {
    const item = elGrabber('[data-test="title"]');
    expect(item.textContent).toContain(MockedHomes[0].title);
  });

  it('should show price per night', () => {
    const item = elGrabber('[data-test="price-nightly"]');
    expect(item.textContent).toContain(MockedHomes[0].price_nightly);
  });

  it('should show check in date field', () => {
    const item = elGrabber('[data-test="check-in-date"]');
    expect(item).toBeTruthy();
  });

  it('should show check out date field', () => {
    const item = elGrabber('[data-test="check-out-date"]');
    expect(item).toBeTruthy();
  });

});
