import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DepartamentosRoutingModule } from './departamentos-routing.module';
import { DepartamentosComponent } from './departamentos/departamentos.component';
import { DepartamentosFormComponent } from './departamentos-form/departamentos-form.component';


@NgModule({
  declarations: [
    DepartamentosComponent,
    DepartamentosFormComponent
  ],
  imports: [
    CommonModule,
    DepartamentosRoutingModule
  ]
})
export class DepartamentosModule { }
