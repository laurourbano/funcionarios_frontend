import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Funcionario } from '../model/funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {

  constructor(private http: HttpClient) { }

  getFuncionarios(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>('http://localhost:3000/api/funcionarios', { responseType: 'json' });
  }

  getFuncionario(id: number): Observable<Funcionario> {
    return this.http.get<Funcionario>(`http://localhost:3000/api/funcionarios/${ id }`, { responseType: 'json' });
  }

  deleteFuncionario(id: number) {
    return this.http.delete(`http://localhost:3000/api/funcionarios/${ id }`, { responseType: 'json' });
  }

  updateFuncionario(funcionario: any): Observable<Funcionario> {
    return this.http.put<Funcionario>(`http://localhost:3000/api/funcionarios/${ funcionario.id }`, funcionario, { responseType: 'json' });
  }

  createFuncionario(funcionario: any): Observable<Funcionario> {
    return this.http.post<Funcionario>('http://localhost:3000/api/funcionarios', funcionario, { responseType: 'json' });
  }

  openDialog(funcionario: Funcionario) {
    console.log(funcionario);
  }

  showMessage(msg: string) {
    console.log('Message');
  }

}
