import { Component, OnInit } from '@angular/core';
import {Cliente} from '../cliente'
import {ClienteService} from '../cliente.service'
import {Router, ActivatedRoute} from '@angular/router'
import Swal from 'sweetalert2/src/sweetalert2.js'

@Component({
  selector: 'app-clienteformulario',
  templateUrl: './clienteformulario.component.html',
})
export class ClienteformularioComponent implements OnInit {


    cliente: Cliente = new Cliente()
    banderaform:boolean;

    constructor(private clienteService: ClienteService,
    private router: Router,
  private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
      this.cargarCliente()
    }

    cargarCliente(): void{
      this.activatedRoute.params.subscribe(params => {
        let id = params['id']
        if(id){
          this.clienteService.getCliente(id).subscribe( (cliente) => this.cliente = cliente)
          this.banderaform=true;
        }
        else{
          this.banderaform=false;
        }
      })
    }

    create(): void {
      this.clienteService.create(this.cliente)
        .subscribe(cliente => {
          this.router.navigate(['/cliente'])
          Swal.fire('Nuevo cliente', `Cliente ${cliente.idClient} creado con éxito!`, 'success')
        }
        );
    }

    update():void{
      this.clienteService.update(this.cliente)
      .subscribe( cliente => {
        this.router.navigate(['/cliente'])
        Swal.fire('Cliente Actualizado', `Cliente ${cliente.idClient} actualizado con éxito!`, 'success')
      }

      )
    }

  }
