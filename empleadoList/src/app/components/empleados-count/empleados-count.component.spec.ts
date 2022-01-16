import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosCountComponent } from './empleados-count.component';

describe('EmpleadosCountComponent', () => {
  let component: EmpleadosCountComponent;
  let fixture: ComponentFixture<EmpleadosCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleadosCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadosCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
