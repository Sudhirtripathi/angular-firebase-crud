import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UblogComponent } from './ublog.component';

describe('UblogComponent', () => {
  let component: UblogComponent;
  let fixture: ComponentFixture<UblogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UblogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
