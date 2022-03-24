import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleStatisticsComponent } from './battle-statistics.component';

describe('BattleStatisticsComponent', () => {
  let component: BattleStatisticsComponent;
  let fixture: ComponentFixture<BattleStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BattleStatisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BattleStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
