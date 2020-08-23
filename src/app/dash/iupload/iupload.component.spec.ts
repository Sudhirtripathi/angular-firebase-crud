import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IuploadComponent } from './iupload.component';

describe('IuploadComponent', () => {
  let component: IuploadComponent;
  let fixture: ComponentFixture<IuploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IuploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
