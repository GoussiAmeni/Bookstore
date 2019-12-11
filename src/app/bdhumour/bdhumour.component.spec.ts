import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BdhumourComponent } from './bdhumour.component';

describe('BdhumourComponent', () => {
  let component: BdhumourComponent;
  let fixture: ComponentFixture<BdhumourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BdhumourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BdhumourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
