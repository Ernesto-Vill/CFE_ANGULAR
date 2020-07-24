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
  delete(usuario: Usuario): void {
    Swal.fire({
      title: 'Está seguro?',
      text: `¿Seguro que desea eliminar al usuario?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: false,
      reverseButtons: true
    }).then((result) => {
      if (result.value) {

       this.usuarioService.delete(usuario.idUsu).subscribe(
          response => {
            this.usuarios = this.usuarios.filter(cli => cli !== usuario)
            Swal.fire(
              'Usuario Eliminado!',
              `Usuario ${usuario.idUsu} eliminado con éxito.`,
              'success'
            )
          }
        )

      }
    })
  }

}
