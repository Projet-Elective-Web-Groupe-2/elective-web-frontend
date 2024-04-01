import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHistoricComponent } from './card-historic.component';

describe('CardHistoricComponent', () => {
  let component: CardHistoricComponent;
  let fixture: ComponentFixture<CardHistoricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardHistoricComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardHistoricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
