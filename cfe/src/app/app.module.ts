import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdenComponent } from './orden/orden.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OrdenService } from './orden/orden.service';
import { HttpClientModule } from '@angular/common/http';
import { ClienteComponent } from './cliente/cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    OrdenComponent,
    NavbarComponent,
    ClienteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [OrdenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
