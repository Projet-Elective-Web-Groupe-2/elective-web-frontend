import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageDeveloperComponent } from './homepage-developer.component';

describe('HomepageDeveloperComponent', () => {
  let component: HomepageDeveloperComponent;
  let fixture: ComponentFixture<HomepageDeveloperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageDeveloperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
