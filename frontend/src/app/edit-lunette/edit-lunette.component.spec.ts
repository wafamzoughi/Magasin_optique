import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLunetteComponent } from './edit-lunette.component';

describe('EditLunetteComponent', () => {
  let component: EditLunetteComponent;
  let fixture: ComponentFixture<EditLunetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditLunetteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditLunetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
