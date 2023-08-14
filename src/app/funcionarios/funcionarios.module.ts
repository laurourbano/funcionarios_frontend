import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { FuncionariosRoutingModule } from './funcionarios-routing.module';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { FuncionariosFormComponent } from './funcionarios-form/funcionarios-form.component';


@NgModule({
  declarations: [
    FuncionariosComponent,
    FuncionariosFormComponent
  ],
  imports: [
    CommonModule,
    FuncionariosRoutingModule,
    AppMaterialModule
  ]
})
export class FuncionariosModule { }
