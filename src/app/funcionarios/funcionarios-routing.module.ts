import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncionariosFormComponent } from './funcionarios-form/funcionarios-form.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';

const routes: Routes = [
  { path: '', component: FuncionariosComponent },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class FuncionariosRoutingModule { }
