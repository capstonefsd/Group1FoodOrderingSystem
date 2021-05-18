import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdigasComponent } from './adigas.component';

describe('AdigasComponent', () => {
  let component: AdigasComponent;
  let fixture: ComponentFixture<AdigasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdigasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdigasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
