import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'menu',
    loadComponent: () => import('./menu/menu.page').then( m => m.MenuPage)
  },
  {
    path: 'menu-dificultades',
    loadComponent: () => import('./menu-dificultades/menu-dificultades.page').then( m => m.MenuDificultadesPage)
  },
  {
    path: 'juego-easy',
    loadComponent: () => import('./juego-easy/juego-easy.page').then( m => m.JuegoEasyPage)
  },
  {
    path: 'juego-medium',
    loadComponent: () => import('./juego-medium/juego-medium.page').then( m => m.JuegoMediumPage)
  },
  {
    path: 'ranking',
    loadComponent: () => import('./ranking/ranking.page').then( m => m.RankingPage)
  },
];
