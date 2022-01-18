import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoGastosComponent } from './ingreso-gastos.component';

describe('IngresoGastosComponent', () => {
  let component: IngresoGastosComponent;
  let fixture: ComponentFixture<IngresoGastosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresoGastosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresoGastosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
