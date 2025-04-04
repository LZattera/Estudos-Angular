import { Component, OnInit } from '@angular/core';
import { UsuarioListar } from '../../models/Usuario';
import { UsuarioService } from '../../services/usuario.service';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    RouterModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  usuarios: UsuarioListar[] = [];
  usuariosGeral: UsuarioListar[] = [];

  constructor(
    private serviceUsuario :UsuarioService
  ){}

  ngOnInit(): void {
    this.serviceUsuario.GetUsuarios().subscribe({
      next:(res)=>{
        this.usuarios = res.dados;
        this.usuariosGeral = res.dados;
        console.log(res.dados)
      }
    })  
  }

  search(event:Event){
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.usuarios = this.usuariosGeral.filter(usuario =>{
      return usuario.nomeCompleto.toLowerCase().includes(value);
    });
  }

  delete(idUsuario:number|undefined){
    console.log("Excluir")
    this.serviceUsuario.DeleteUsuario(idUsuario).subscribe({
      next:(res)=>{
       window.location.reload();//recarrega a pagina
      },
      error(err) {
          //colocar um popover onde informa a mensagem de erro ao deletar um usuario res.mensagem
      },
    });
  }

}
