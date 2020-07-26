import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdenComponent } from './orden/orden.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OrdenService } from './orden/orden.service';
import { ClienteService } from './cliente/cliente.service';
import { HttpClientModule } from '@angular/common/http';

import { ClienteComponent } from './cliente/cliente.component';
import { MaterialComponent } from './material/material.component';
import{RouterModule,Routes} from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { ClienteformularioComponent } from './cliente/clienteformulario/clienteformulario.component';
import { MaterialformularioComponent } from './material/materialformulario/materialformulario.component';
import { UsuarioformularioComponent } from './usuario/usuarioformulario/usuarioformulario.component'

const routes: Routes = [
  {path: '',redirectTo:'/material',pathMatch:'full'},
  {path:'orden',component:OrdenComponent},
  {path:'material',component:MaterialComponent},
  {path:'material/formulario',component:MaterialformularioComponent},
  {path:'material/formulario/:id',component:MaterialformularioComponent},
  {path:'usuario',component:UsuarioComponent},
  {path:'usuario/formulario',component:UsuarioformularioComponent},
  {path:'usuario/formulario/:id',component:UsuarioformularioComponent},
  {path:'cliente',component:ClienteComponent},
  {path:'cliente/formulario',component:ClienteformularioComponent},
  {path:'cliente/formulario/:id',component:ClienteformularioComponent},
  {path:'usuarioformulario',component:UsuarioformularioComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    OrdenComponent,
    NavbarComponent,
    ClienteComponent,
    MaterialComponent,
    UsuarioComponent,
    ClienteformularioComponent,
    MaterialformularioComponent,
    UsuarioformularioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [OrdenService,
              ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
