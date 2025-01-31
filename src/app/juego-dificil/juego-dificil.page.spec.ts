import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JuegoDificilPage } from './juego-dificil.page';

describe('JuegoDificilPage', () => {
  let component: JuegoDificilPage;
  let fixture: ComponentFixture<JuegoDificilPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegoDificilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
