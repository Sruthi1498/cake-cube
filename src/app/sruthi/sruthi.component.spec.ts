import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SruthiComponent } from './sruthi.component';

describe('SruthiComponent', () => {
  let component: SruthiComponent;
  let fixture: ComponentFixture<SruthiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SruthiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SruthiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
