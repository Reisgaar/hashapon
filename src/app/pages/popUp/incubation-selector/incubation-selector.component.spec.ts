import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncubationSelectorComponent } from './incubation-selector.component';

describe('IncubationSelectorComponent', () => {
  let component: IncubationSelectorComponent;
  let fixture: ComponentFixture<IncubationSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncubationSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncubationSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
