import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDeveloperComponent } from './card-developer.component';

describe('CardDeveloperComponent', () => {
  let component: CardDeveloperComponent;
  let fixture: ComponentFixture<CardDeveloperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDeveloperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
