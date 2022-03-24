import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEggComponent } from './new-egg.component';

describe('NewEggComponent', () => {
  let component: NewEggComponent;
  let fixture: ComponentFixture<NewEggComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewEggComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEggComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
