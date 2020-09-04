import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B2mComponent } from './b2m.component';

describe('B2mComponent', () => {
  let component: B2mComponent;
  let fixture: ComponentFixture<B2mComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B2mComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B2mComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
