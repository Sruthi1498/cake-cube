import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalisedComponent } from './personalised.component';

describe('PersonalisedComponent', () => {
  let component: PersonalisedComponent;
  let fixture: ComponentFixture<PersonalisedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalisedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalisedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
