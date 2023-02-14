import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BookingComponent} from './booking.component';
import {MockedHomes} from "../../models/homes.mock";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {HomeModel} from "../../models/home.model";
import {FormsModule} from "@angular/forms";
import {DataService} from "../../services/data.service";
import {spyOnClass} from "jasmine-es6-spies/dist";
import {of} from "rxjs";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";




describe('BookingComponent', () => {
  // test based parameters
  let component: BookingComponent;
  let fixture: ComponentFixture<BookingComponent>;
  let dataService: jasmine.SpyObj<DataService>;
  let dialogData: { home: HomeModel };

  // helper functions
  const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
  const elGrabber = (selector: string) => fixture.nativeElement.querySelector(selector);
  const selectDates = () => {
    // get check in date field
    const checkInField: HTMLInputElement = elGrabber('[data-test="check-in-date"] input');

    // user enters check in date 12/20/19
    checkInField.value = '12/20/19';
    checkInField.dispatchEvent(new Event('input'));

    // get check out date field
    const checkOutField: HTMLInputElement = elGrabber('[data-test="check-out-date"] input');

    // user enters check out date 12/23/19
    checkOutField.value = '12/23/19';
    checkOutField.dispatchEvent(new Event('input'));

    // update feature component
    fixture.detectChanges();
  }

  // tests
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        MatButtonModule
      ],
      declarations: [BookingComponent],
      providers: [
        {provide: DataService, useFactory: () => spyOnClass(DataService)},
        {provide: MAT_DIALOG_DATA, useValue: {}}
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingComponent);
    component = fixture.componentInstance;
    dataService = TestBed.get(DataService);

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
    const item = elGrabber('[data-test="title"]');
    expect(item.textContent).toContain('Book: ' + MockedHomes[0].title);
  });

  it('should show price per night', () => {
    const item = elGrabber('[data-test="price-nightly"]');

    expect(item.textContent).toContain(formatter.format(MockedHomes[0].price_nightly) + ' per night');
  });

  it('should show check in date field', () => {
    const item = elGrabber('[data-test="check-in-date"]');
    expect(item).toBeTruthy();
  });

  it('should show check out date field', () => {
    const item = elGrabber('[data-test="check-out-date"]');
    expect(item).toBeTruthy();
  });

  it('should show total price', () => {
    // select dates to calculate the total price for a stay
    selectDates();

    // assert that the total shows that 3 nights * the home's price-nightly $125, so 3 * $125 = $375
    expect(elGrabber('[data-test="price-total"]').textContent).toContain( 'Total: ' + formatter.format(dialogData.home.price_nightly * 3));
  });

  it('should show submit button', () => {
    const item = elGrabber('[data-test="submit-btn"] button');
    expect(item).toBeTruthy();
  });

  it('should book home after clicking the submit button', () => {
    dataService.bookHome$.and.returnValue(of(null));

    // select dates to be sent to the service
    selectDates();

    // Grab the button to click
    const submitBtn = elGrabber('[data-test="submit-btn"] button');

    // Click the button
    submitBtn.click();

    // Assert that the data service was used to create a booking
    expect(dataService.bookHome$).toHaveBeenCalled();
  });
});
