import { Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular'

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'log-in',
    pathMatch: 'full',
  },
  {
    path: 'menu-dificultades',
    loadComponent: () => import('./menu-dificultades/menu-dificultades.page').then( m => m.MenuDificultadesPage),
    canActivate: [ AuthGuard ]
  },
  {
    path: 'juego-easy',
    loadComponent: () => import('./juego-easy/juego-easy.page').then( m => m.JuegoEasyPage),
    canActivate: [ AuthGuard ]
  },
  {
    path: 'juego-medium',
    loadComponent: () => import('./juego-medium/juego-medium.page').then( m => m.JuegoMediumPage),
    canActivate: [ AuthGuard ]
  },
  {
    path: 'ranking',
    loadComponent: () => import('./ranking/ranking.page').then( m => m.RankingPage),
    canActivate: [ AuthGuard ]
  },
  {
    path: 'log-in',
    loadComponent: () => import('./log-in/log-in.page').then( m => m.LogInPage),
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then( m => m.HomePage),
    canActivate: [ AuthGuard ]
  },
  {
    path: 'juego-dificil',
    loadComponent: () => import('./juego-dificil/juego-dificil.page').then( m => m.JuegoDificilPage)
  },
];
