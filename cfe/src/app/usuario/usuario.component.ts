import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import { UsuarioService } from './usuario.service';
import Swal from 'sweetalert2/src/sweetalert2.js'

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
})
export class UsuarioComponent implements OnInit {
  usuarios:Usuario[];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(){
    this.usuarioService.getUsuarios().subscribe(
      usuarios =>this.usuarios =usuarios
    );
  }

}
