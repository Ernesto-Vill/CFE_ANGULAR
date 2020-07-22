import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdenComponent } from './orden/orden.component';
<<<<<<< HEAD
import { OrdenService } from './orden/orden.service';
import { HttpClientModule } from '@angular/common/http';
=======
import { NavbarComponent } from './navbar/navbar.component';
>>>>>>> e2711a6e8547f5a10b6814038fcae53d572cb73f

@NgModule({
  declarations: [
    AppComponent,
    OrdenComponent,
    NavbarComponent
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
