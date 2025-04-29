import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { LoginLayoutComponent } from './layout/login-layout/login-layout.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      { path: '', component: LoginComponent },
      { path: 'login', component: LoginComponent },
    ],
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      {
        path: 'usuario',
        loadComponent: () =>
          import('./pages/usuario/usuario.component').then(
            (m) => m.UsuarioComponent
          ),
      },
    ],
  },
];
