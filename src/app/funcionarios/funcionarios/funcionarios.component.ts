import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Funcionario } from 'src/app/model/funcionario';
import { FuncionariosService } from 'src/app/services/funcionarios.service';


@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: [ './funcionarios.component.scss' ]
})
export class FuncionariosComponent {

  funcionarios: Funcionario[] = [];
  displayedColumns: string[] = [ 'id', 'nome', 'ramal', 'email', 'departamento', 'status', 'acoes' ];
  dataSource!: MatTableDataSource<Funcionario>;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort) sort: MatSort = new MatSort();

  constructor(private service: FuncionariosService) {
  }

  ngOnInit() {
    this.service.getFuncionarios().subscribe((data: any) => {
      this.funcionarios = data.funcionarios;
      this.dataSource = new MatTableDataSource(this.funcionarios);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog(funcionario: Funcionario) {
    this.service.openDialog(funcionario);
  }

  delete(id: number) {
    this.service.deleteFuncionario(id).subscribe(() => {
      this.service.showMessage('Funcionário excluído com sucesso!');
      this.ngOnInit();
    });
  }

}
