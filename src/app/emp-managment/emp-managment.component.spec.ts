import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpManagmentComponent } from './emp-managment.component';

describe('EmpManagmentComponent', () => {
  let component: EmpManagmentComponent;
  let fixture: ComponentFixture<EmpManagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpManagmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
