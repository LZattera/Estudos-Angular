import { Component, OnInit } from '@angular/core';
import { FormularioComponent } from '../../componentes/formulario/formulario.component';
import { UsuarioService } from '../../services/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioListar } from '../../models/Usuario';

@Component({
  selector: 'app-editar',
  imports: [
    FormularioComponent,
  ],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent implements OnInit {

  btn: string = "Editar";
  titulo: string = "Editar Usuário";
  usuario!: UsuarioListar;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private activatedrouter: ActivatedRoute
  ){}

  ngOnInit(){
   const id = Number(this.activatedrouter.snapshot.paramMap.get('id'));
   this.usuarioService.GetUsuarioId(id).subscribe({
    next:(res)=>{
      this.usuario = res.dados;
    }
   })
  }

  editarUsuario(usuario: UsuarioListar){
    this.usuarioService.EditarUsuario(usuario).subscribe({
      next:(res)=>{
        this.router.navigate(['/']);
      }
    })
  }
}
