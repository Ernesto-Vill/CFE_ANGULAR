import { Component, OnInit } from '@angular/core';
import { Material } from './material';
import { MaterialService } from './material.service';
import Swal from 'sweetalert2/src/sweetalert2.js'

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html'
})
export class MaterialComponent implements OnInit {
  materiales: Material[];

  constructor(private materialService:MaterialService) { }

  ngOnInit(): void {
    this.materialService.getMateriales().subscribe(
      materiales =>this.materiales=materiales
    );
  }

  delete(material: Material): void {
    Swal.fire({
      title: 'Está seguro?',
      text: `¿Seguro que desea eliminar al material?`,
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

       this.materialService.delete(material.idMat).subscribe(
          response => {
            this.materiales = this.materiales.filter(cli => cli !== material)
            Swal.fire(
              'Material Eliminado!',
              `Material ${material.idMat} eliminado con éxito.`,
              'success'
            )
          }
        )

      }
    })
  }
}
