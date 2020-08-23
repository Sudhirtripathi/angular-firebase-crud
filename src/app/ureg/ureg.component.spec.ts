import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UregComponent } from './ureg.component';

describe('UregComponent', () => {
  let component: UregComponent;
  let fixture: ComponentFixture<UregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
