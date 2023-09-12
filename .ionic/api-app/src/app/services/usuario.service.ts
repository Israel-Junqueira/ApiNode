import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/Usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public listUsuario: Usuario[] = [];
  private url = 'http://localhost:3000/usuarios';

  //criar uma instancia do httpclient
  constructor(private http: HttpClient) { }

  public getAll(){
    return this.http.get(this.url)
  }

  //2° trás os dados de apenas 1 registro

  public getOne(id:number){
    return this.http.get(`${this.url}/${id}`)
  }
}
