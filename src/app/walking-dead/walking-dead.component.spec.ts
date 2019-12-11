import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkingDeadComponent } from './walking-dead.component';

describe('WalkingDeadComponent', () => {
  let component: WalkingDeadComponent;
  let fixture: ComponentFixture<WalkingDeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalkingDeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkingDeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
