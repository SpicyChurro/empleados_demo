import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PersonaComponent } from './components/persona/persona.component';
import { PuestoComponent } from './components/puesto/puesto.component';
import { RouterModule } from '@angular/router';
import { EmpleadoPuestoComponent } from './components/empleado-puesto/empleado-puesto.component';
import { FilterPipe } from './components/filter.pipe';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    PuestoComponent,
    EmpleadoPuestoComponent,
    FilterPipe,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
