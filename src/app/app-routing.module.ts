import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',  redirectTo: '/funcionarios', pathMatch: 'full' },
  { path: 'funcionarios', loadChildren: () => import('./funcionarios/funcionarios.module').then(m => m.FuncionariosModule) },
  { path: 'departamentos', loadChildren: () => import('./departamentos/departamentos.module').then(m => m.DepartamentosModule) }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
