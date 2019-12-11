import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandatlasComponent } from './grandatlas.component';

describe('GrandatlasComponent', () => {
  let component: GrandatlasComponent;
  let fixture: ComponentFixture<GrandatlasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrandatlasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandatlasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
