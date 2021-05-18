import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdipiComponent } from './udipi.component';

describe('UdipiComponent', () => {
  let component: UdipiComponent;
  let fixture: ComponentFixture<UdipiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UdipiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UdipiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
