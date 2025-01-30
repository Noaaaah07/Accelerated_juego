import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'log-in',
    pathMatch: 'full',
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
  {
    path: 'log-in',
    loadComponent: () => import('./log-in/log-in.page').then( m => m.LogInPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then( m => m.HomePage)
  },
];
