import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilComponent } from './Tela2/Perfil/Perfil.component';
import { HeaderLoginComponent } from './Tela1/Header-Login/Header-Login.component';

const routes: Routes = [
  {path: "", component : HeaderLoginComponent},
  {path: 'navegar/:id', component: PerfilComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
