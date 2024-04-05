import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricRestaurantComponent } from './historic-restaurant.component';

describe('HistoricRestaurantComponent', () => {
  let component: HistoricRestaurantComponent;
  let fixture: ComponentFixture<HistoricRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricRestaurantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
