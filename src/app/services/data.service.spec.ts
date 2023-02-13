import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { DataService } from './data.service';
import { HttpClient } from "@angular/common/http";
import { MockedHomes } from "../models/homes.mock";
import {of} from "rxjs";

describe('DataService', () => {
  let service: DataService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be return the list of homes', () => {

    // Spy on and mock the HttpClient
    httpClient = TestBed.get(HttpClient);
    spyOn(httpClient, 'get').and.returnValue(of(MockedHomes));

    // Use out service to get homes
    service = TestBed.inject(DataService);
    const spy = jasmine.createSpy('dataServiceSpy');
    service.getHomes$().subscribe(spy);

    // Verify that the service returned mocked data
    expect(spy).toHaveBeenCalledWith(MockedHomes);

    // Verify that the service called the proper HTTP endpoint
    expect(httpClient.get).toHaveBeenCalledWith('assets/homes.json');

  });

});
