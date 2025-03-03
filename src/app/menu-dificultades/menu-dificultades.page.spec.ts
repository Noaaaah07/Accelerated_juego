import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuDificultadesPage } from './menu-dificultades.page';

describe('MenuDificultadesPage', () => {
  let component: MenuDificultadesPage;
  let fixture: ComponentFixture<MenuDificultadesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuDificultadesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
