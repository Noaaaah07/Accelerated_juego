import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JuegoEasyPage } from './juego-easy.page';

describe('JuegoEasyPage', () => {
  let component: JuegoEasyPage;
  let fixture: ComponentFixture<JuegoEasyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegoEasyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
