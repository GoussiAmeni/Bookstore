import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZidaneComponent } from './zidane.component';

describe('ZidaneComponent', () => {
  let component: ZidaneComponent;
  let fixture: ComponentFixture<ZidaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZidaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZidaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
