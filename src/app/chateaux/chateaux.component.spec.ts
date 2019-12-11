import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChateauxComponent } from './chateaux.component';

describe('ChateauxComponent', () => {
  let component: ChateauxComponent;
  let fixture: ComponentFixture<ChateauxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChateauxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChateauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
