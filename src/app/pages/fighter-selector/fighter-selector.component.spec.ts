import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FighterSelectorComponent } from './fighter-selector.component';

describe('FighterSelectorComponent', () => {
  let component: FighterSelectorComponent;
  let fixture: ComponentFixture<FighterSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FighterSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FighterSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
