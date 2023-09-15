import { Component, afterNextRender } from '@angular/core';
import { Usuario } from '../models/Usuario.model';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  listaUsuarios : Usuario[] = [];
  usuario?: Usuario;
  id! : number;

  //para consumir api devemos instanciar o serviço que foi criado
  constructor(private userService:UsuarioService) {}

  //Criar os metodos de trabalho
  //Depois chamamos o metodo que desejamos usar
  //utilizarmos o subscribe para aguardar o retorno da api
  //primeiro chamamos o serviço atraves da sua varival
  //criar uma varival para guardar o retorno
  //enviamos essa variavel para uma função anonima.
  buscarUsuario(){
    this.userService.getAll().subscribe(retorno=>{
      this.listaUsuarios = retorno as Usuario[];
      console.log(this.listaUsuarios);
    });

  }

  
  buscarUsuarioID(){   
    this.userService.getOne(this.id).subscribe(retorno =>{
      console.log(retorno);
      this.usuario = retorno as Usuario;
      this.listaUsuarios = [];
    });
  }
}
