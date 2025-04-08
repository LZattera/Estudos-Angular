import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioListar } from '../models/Usuario';
import { Response } from '../models/Response';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  ApiUrl = environment.UrlApi;

  constructor(
    private http: HttpClient
  ) { }

  GetUsuarios():Observable<Response<UsuarioListar[]>> {
    return this.http.get<Response<UsuarioListar[]>>(this.ApiUrl);
  }

  DeleteUsuario(idUsuario: number|undefined):Observable<Response<UsuarioListar[]>>{
    console.log(`${this.ApiUrl}?idUsuario=${idUsuario}`)
    
    return this.http.delete<Response<UsuarioListar[]>>(`${this.ApiUrl}?idUsuario=${idUsuario}`);
  }

  CriarUsuario(usuario: UsuarioListar):Observable<Response<UsuarioListar[]>>{
    return this.http.post<Response<UsuarioListar[]>>(this.ApiUrl,usuario);
  }

  GetUsuarioId(idUsuario: number):Observable<Response<UsuarioListar>>{
    return this.http.get<Response<UsuarioListar>>(`${this.ApiUrl}/${idUsuario}`);
  }

  EditarUsuario(usuario: UsuarioListar):Observable<Response<UsuarioListar[]>>{
    return this.http.put<Response<UsuarioListar[]>>(this.ApiUrl, usuario);
  }
}
