import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LitteratureComponent } from './litterature.component';

describe('LitteratureComponent', () => {
  let component: LitteratureComponent;
  let fixture: ComponentFixture<LitteratureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LitteratureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LitteratureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
