import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageSalesComponent } from './homepage-sales.component';

describe('HomepageSalesComponent', () => {
  let component: HomepageSalesComponent;
  let fixture: ComponentFixture<HomepageSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageSalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
