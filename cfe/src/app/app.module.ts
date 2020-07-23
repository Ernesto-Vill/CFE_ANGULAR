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
=======
import { MaterialComponent } from './material/material.component';
import{RouterModule,Routes} from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component'
>>>>>>> 99f9083ab50b40702a8bd319da587d6ac80ffdfc

const routes: Routes = [
  {path: '',redirectTo:'/material',pathMatch:'full'},
  {path:'orden',component:OrdenComponent},
  {path:'material',component:MaterialComponent},
  {path:'usuario',component:UsuarioComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    OrdenComponent,
    NavbarComponent,
<<<<<<< HEAD
    ClienteComponent
=======
    MaterialComponent,
    UsuarioComponent
>>>>>>> 99f9083ab50b40702a8bd319da587d6ac80ffdfc
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
