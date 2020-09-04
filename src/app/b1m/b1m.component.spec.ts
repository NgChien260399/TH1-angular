import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B1mComponent } from './b1m.component';

describe('B1mComponent', () => {
  let component: B1mComponent;
  let fixture: ComponentFixture<B1mComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B1mComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B1mComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
