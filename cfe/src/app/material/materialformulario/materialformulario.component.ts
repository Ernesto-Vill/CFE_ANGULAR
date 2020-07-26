import { Component, OnInit } from '@angular/core';
import {Material} from '../material'
import {MaterialService} from '../material.service'
import {Router, ActivatedRoute} from '@angular/router'
import Swal from 'sweetalert2/src/sweetalert2.js'


@Component({
  selector: 'app-materialformulario',
  templateUrl: './materialformulario.component.html',
})
export class MaterialformularioComponent implements OnInit {

  material: Material = new Material()
  banderaform:boolean;

  constructor(private materialService: MaterialService,
  private router: Router,
private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarMaterial()
  }
  cargarMaterial(): void{
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.materialService.getMaterial(id).subscribe( (material) => this.material = material)
        this.banderaform=true;
      }
      else{
        this.banderaform=false;
      }
    })
  }

  create(): void {
    this.materialService.create(this.material)
      .subscribe(material => {
        this.router.navigate(['/material'])
        Swal.fire('Nuevo material', `Material ${material.idMat} creado con éxito!`, 'success')
      }
      );

}
update():void{
  this.materialService.update(this.material)
  .subscribe( material => {
      this.router.navigate(['/material'])
      Swal.fire('Cliente Actualizado', `Material ${material.idMat} actualizado con éxito!`, 'success')
    }
    )
  }
}
