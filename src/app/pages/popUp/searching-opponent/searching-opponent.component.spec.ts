import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchingOpponentComponent } from './searching-opponent.component';

describe('SearchingOpponentComponent', () => {
  let component: SearchingOpponentComponent;
  let fixture: ComponentFixture<SearchingOpponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchingOpponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchingOpponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
