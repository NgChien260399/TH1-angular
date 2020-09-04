import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B3mComponent } from './b3m.component';

describe('B3mComponent', () => {
  let component: B3mComponent;
  let fixture: ComponentFixture<B3mComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B3mComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B3mComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
