import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageRestaurantComponent } from './homepage-restaurant.component';

describe('HomepageRestaurantComponent', () => {
  let component: HomepageRestaurantComponent;
  let fixture: ComponentFixture<HomepageRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageRestaurantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
