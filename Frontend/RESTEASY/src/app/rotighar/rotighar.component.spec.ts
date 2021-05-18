import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotigharComponent } from './rotighar.component';

describe('RotigharComponent', () => {
  let component: RotigharComponent;
  let fixture: ComponentFixture<RotigharComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RotigharComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RotigharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
