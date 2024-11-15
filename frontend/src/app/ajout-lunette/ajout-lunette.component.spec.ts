import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutLunetteComponent } from './ajout-lunette.component';

describe('AjoutLunetteComponent', () => {
  let component: AjoutLunetteComponent;
  let fixture: ComponentFixture<AjoutLunetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutLunetteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutLunetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
