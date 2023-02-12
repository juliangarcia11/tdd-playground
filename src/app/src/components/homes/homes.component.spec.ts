import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomesComponent } from './homes.component';

describe('HomesComponent', () => {
  let component: HomesComponent;
  let fixture: ComponentFixture<HomesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

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
