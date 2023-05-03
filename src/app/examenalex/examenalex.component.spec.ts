import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenalexComponent } from './examenalex.component';

describe('ExamenalexComponent', () => {
  let component: ExamenalexComponent;
  let fixture: ComponentFixture<ExamenalexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamenalexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamenalexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
