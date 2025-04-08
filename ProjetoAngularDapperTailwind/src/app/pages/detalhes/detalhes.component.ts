import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, RouterModule } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { UsuarioListar } from '../../models/Usuario';

@Component({
  selector: 'app-detalhes',
  imports: [
    RouterModule
  ],
  templateUrl: './detalhes.component.html',
  styleUrl: './detalhes.component.css'
})
export class DetalhesComponent implements OnInit {

  usuario!:UsuarioListar;

constructor(
  private route: ActivatedRoute,
  private usuarioService: UsuarioService
){}

  ngOnInit(): void {
    const id= Number(this.route.snapshot.paramMap.get("id"));
    this.usuarioService.GetUsuarioId(id).subscribe({
      next:(res)=>{
        this.usuario = res.dados;
      }
    })
  }


}
