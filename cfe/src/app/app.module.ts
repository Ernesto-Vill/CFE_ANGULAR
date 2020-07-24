import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdenComponent } from './orden/orden.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OrdenService } from './orden/orden.service';
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
  {path:'usuario',component:UsuarioComponent},
  {path:'cliente',component:ClienteComponent},
  {path:'clienteformulario',component:ClienteformularioComponent},
  {path:'materialformulario',component:MaterialformularioComponent},
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
    RouterModule.forRoot(routes)
  ],
  providers: [OrdenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
