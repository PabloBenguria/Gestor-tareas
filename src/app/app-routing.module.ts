import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TareasComponent }  from './tareas/tareas.component';
import { TareasCrearComponent }  from './tareas/tareas-crear/tareas-crear.component';

const routes: Routes = [
  { path: '', redirectTo: '/tareas', pathMatch: 'full' },
  { path: 'tareas', component: TareasComponent },
  { path: 'tareas/crear', component: TareasCrearComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
