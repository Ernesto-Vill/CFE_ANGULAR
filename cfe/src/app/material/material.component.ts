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
    this.materialService.getMaterial().subscribe(
      materiales =>this.materiales=materiales
    );
  }

}
