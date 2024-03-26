import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageDeliveryComponent } from './homepage-delivery.component';

describe('HomepageDeliveryComponent', () => {
  let component: HomepageDeliveryComponent;
  let fixture: ComponentFixture<HomepageDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageDeliveryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
