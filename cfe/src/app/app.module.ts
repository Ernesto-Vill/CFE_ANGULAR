import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdenComponent } from './orden/orden.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OrdenService } from './orden/orden.service';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
import { ClienteComponent } from './cliente/cliente.component';
import { MaterialComponent } from './material/material.component';
import{RouterModule,Routes} from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component'
=======

import { ClienteComponent } from './cliente/cliente.component';

import { MaterialComponent } from './material/material.component';
import{RouterModule,Routes} from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component'

>>>>>>> 2874d0ae862c672be174620f9148c28125cff58a

const routes: Routes = [
  {path: '',redirectTo:'/material',pathMatch:'full'},
  {path:'orden',component:OrdenComponent},
  {path:'material',component:MaterialComponent},
  {path:'usuario',component:UsuarioComponent},
  {path:'cliente',component:ClienteComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    OrdenComponent,
    NavbarComponent,
    ClienteComponent,
    MaterialComponent,
    UsuarioComponent
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
