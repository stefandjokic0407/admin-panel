import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessGroupsComponent } from './access-groups.component';

describe('AccessGroupsComponent', () => {
  let component: AccessGroupsComponent;
  let fixture: ComponentFixture<AccessGroupsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccessGroupsComponent]
    });
    fixture = TestBed.createComponent(AccessGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
