import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/Usuario.model';
import { EMPTY, Observable,map,catchError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public listUsuario: Usuario[] = [];
  private url = 'http://localhost:3000/usuarios';

  //criar uma instancia do httpclient
  constructor(private http: HttpClient) { }

  public getAll():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.url).pipe(
      map(retorno => retorno),
      catchError(erro=>this.exibeErro(erro))
    );
  }
  
  exibeErro(erro:any):Observable<any>{
    console.log(erro);
    alert('Não foi possivel atender a solicitação!');
    return EMPTY;
  }

  salvar(usuario:Usuario){
    return this.http.post<Usuario>(this.url,usuario).pipe(
      map(retorno=> retorno),
      catchError(erro => this.exibeErro(erro))
    );
  }

  //2° trás os dados de apenas 1 registro

  public getOne(id:number){
    return this.http.get(`${this.url}/${id}`)
  }
}
