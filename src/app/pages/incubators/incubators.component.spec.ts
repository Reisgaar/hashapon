import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncubatorsComponent } from './incubators.component';

describe('IncubatorsComponent', () => {
  let component: IncubatorsComponent;
  let fixture: ComponentFixture<IncubatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncubatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncubatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
