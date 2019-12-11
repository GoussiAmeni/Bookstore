import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanthereComponent } from './panthere.component';

describe('PanthereComponent', () => {
  let component: PanthereComponent;
  let fixture: ComponentFixture<PanthereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanthereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanthereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
