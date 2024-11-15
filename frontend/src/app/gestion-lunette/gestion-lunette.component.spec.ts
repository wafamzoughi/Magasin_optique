import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionLunetteComponent } from './gestion-lunette.component';

describe('GestionLunetteComponent', () => {
  let component: GestionLunetteComponent;
  let fixture: ComponentFixture<GestionLunetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionLunetteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionLunetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
