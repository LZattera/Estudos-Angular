import { Component, OnInit, Output, EventEmitter, input, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UsuarioListar } from '../../models/Usuario';

@Component({
  selector: 'app-formulario',
  imports: [
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent implements OnInit{

  @Input() btnAcao: string = "Cadastrar";
  @Input() titulo: string  = "Cadastrar Usuário";
  @Input() dadosUsuario: UsuarioListar | null  = null;
  @Output() onSubmit = new EventEmitter<UsuarioListar>();
  frm!: FormGroup;

constructor(
  private fb: FormBuilder
){}

  ngOnInit(): void {
    console.log(this.dadosUsuario, 'dadosUsuario');
    this.frm = new FormGroup({
      id:           new FormControl(this.dadosUsuario? this.dadosUsuario.id : 0),
      senha:        new FormControl(this.dadosUsuario? this.dadosUsuario.senha : ''),
      nomeCompleto: new FormControl(this.dadosUsuario? this.dadosUsuario.nomeCompleto : ''),
      email:        new FormControl(this.dadosUsuario? this.dadosUsuario.email : ''),
      salario:      new FormControl(this.dadosUsuario? this.dadosUsuario.salario : 0),
      cargo:        new FormControl(this.dadosUsuario? this.dadosUsuario.cargo : ''),
      cpf:          new FormControl(this.dadosUsuario? this.dadosUsuario.cpf : ''),
      situacao:     new FormControl(this.dadosUsuario? this.dadosUsuario.situacao : true),
    });
  }
  
  submit(){
    console.log(this.frm.value)
    this.onSubmit.emit(this.frm.value);
  }
}
