import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardholdersComponent } from './cardholders.component';

describe('CardholdersComponent', () => {
  let component: CardholdersComponent;
  let fixture: ComponentFixture<CardholdersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardholdersComponent]
    });
    fixture = TestBed.createComponent(CardholdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
