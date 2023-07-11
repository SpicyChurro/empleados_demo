import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonaComponent } from './components/persona/persona.component';
import { PuestoComponent } from './components/puesto/puesto.component';
import { EmpleadoPuestoComponent } from './components/empleado-puesto/empleado-puesto.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: 'lista-empleados', component: PersonaComponent },
  { path: 'lista-puestos', component: PuestoComponent },
  { path: 'lista-relaciones', component: EmpleadoPuestoComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
