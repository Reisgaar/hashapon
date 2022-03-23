import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitingGachaponComponent } from './waiting-gachapon.component';

describe('WaitingGachaponComponent', () => {
  let component: WaitingGachaponComponent;
  let fixture: ComponentFixture<WaitingGachaponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaitingGachaponComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitingGachaponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
