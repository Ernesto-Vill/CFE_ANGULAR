import { Component, OnInit } from '@angular/core';
import { Orden } from './orden';
import { OrdenService } from './orden.service';
import Swal from 'sweetalert2/src/sweetalert2.js'

@Component({
  selector: 'app-orden',
  templateUrl: './orden.component.html'
})
export class OrdenComponent implements OnInit {
  ordenes: Orden[];

  constructor(private ordenService: OrdenService) { }

  ngOnInit() {
    this.ordenService.getOrdenes().subscribe(
      ordenes => this.ordenes = ordenes
    );
  }

  delete(orden: Orden): void {
    Swal.fire({
      title: 'Está seguro?',
      text: `¿Seguro que desea eliminar al orden?`,
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

       this.ordenService.delete(orden.idOrd).subscribe(
          response => {
            this.ordenes = this.ordenes.filter(cli => cli !== orden)
            Swal.fire(
              'Orden Eliminado!',
              `Orden ${orden.idOrd} eliminado con éxito.`,
              'success'
            )
          }
        )

      }
    })
  }

}
