import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdenComponent } from './orden/orden.component';


const routes: Routes = [
  {path: '', redirectTo: '/ordenes', pathMatch: 'full'},
  {path: 'ordenes', component: OrdenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
