import { Component, OnInit } from '@angular/core';
import {Usuario} from '../usuario'
import {UsuarioService} from '../usuario.service'
import {Router, ActivatedRoute} from '@angular/router'
import Swal from 'sweetalert2/src/sweetalert2.js'

@Component({
  selector: 'app-usuarioformulario',
  templateUrl: './usuarioformulario.component.html',
})
export class UsuarioformularioComponent implements OnInit {


    usuario: Usuario = new Usuario()
    banderaform:boolean;

    constructor(private usuarioService: UsuarioService,
    private router: Router,
  private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
      this.cargarUsuario()
    }

    cargarUsuario(): void{
      this.activatedRoute.params.subscribe(params => {
        let id = params['id']
        if(id){
          this.usuarioService.getUsuario(id).subscribe( (usuario) => this.usuario = usuario)
          this.banderaform=true;
        }
        else{
          this.banderaform=false;
        }
      })
    }

    create(): void {
      this.usuarioService.create(this.usuario)
        .subscribe(usuario => {
          this.router.navigate(['/usuario'])
          Swal.fire('Nuevo usuario', `Usuario ${usuario.idUsu} creado con éxito!`, 'success')
        }
        );
    }

    update():void{
      this.usuarioService.update(this.usuario)
      .subscribe( usuario => {
        this.router.navigate(['/usuario'])
        Swal.fire('Usuario Actualizado', `Usuario ${usuario.idUsu} actualizado con éxito!`, 'success')
      }

      )
    }

  }
