import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { TareasComponent } from './tareas/tareas.component';
import { TareaService } from './services/tarea.service';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './menu/menu.component';
import { TareasCrearComponent } from './tareas/tareas-crear/tareas-crear.component';

@NgModule({
  declarations: [
    AppComponent,
    TareasComponent,
    MenuComponent,
    TareasCrearComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
  	TareaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
