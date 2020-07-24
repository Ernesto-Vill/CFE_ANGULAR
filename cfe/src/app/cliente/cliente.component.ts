import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import Swal from 'sweetalert2/src/sweetalert2.js'

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
})
export class ClienteComponent implements OnInit {
  clientes:Cliente[];

  constructor(private clienteService: ClienteService) { }

  ngOnInit()  {
    this.clienteService.getClientes().subscribe(
      clientes => this.clientes = clientes
    );
  }
  delete(cliente: Cliente): void {
    Swal.fire({
      title: 'Está seguro?',
      text: `¿Seguro que desea eliminar al cliente?`,
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

       this.clienteService.delete(cliente.idClient).subscribe(
          response => {
            this.clientes = this.clientes.filter(cli => cli !== cliente)
            Swal.fire(
              'Cliente Eliminado!',
              `Cliente ${cliente.idClient} eliminado con éxito.`,
              'success'
            )
          }
        )

      }
    })
  }

}
