import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SciencesComponent } from './sciences.component';

describe('SciencesComponent', () => {
  let component: SciencesComponent;
  let fixture: ComponentFixture<SciencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SciencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SciencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
