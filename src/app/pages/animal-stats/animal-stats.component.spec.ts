import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalStatsComponent } from './animal-stats.component';

describe('AnimalStatsComponent', () => {
  let component: AnimalStatsComponent;
  let fixture: ComponentFixture<AnimalStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
