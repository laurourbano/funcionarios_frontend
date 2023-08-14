import { Component } from '@angular/core';
import { FuncionariosService } from 'src/app/services/funcionarios.service';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: [ './departamentos.component.scss' ]
})
export class DepartamentosComponent {
  funcionarios: any = [];

  constructor(private service: FuncionariosService) {
  }

  ngOnInit() {
    this.service.getFuncionarios().subscribe((data: any) => {
      this.funcionarios = data;
    });
  }

}
