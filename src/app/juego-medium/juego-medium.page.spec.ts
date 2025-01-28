import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JuegoMediumPage } from './juego-medium.page';

describe('JuegoMediumPage', () => {
  let component: JuegoMediumPage;
  let fixture: ComponentFixture<JuegoMediumPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegoMediumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
