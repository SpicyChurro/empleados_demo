import { Component } from '@angular/core';
import { Persona } from './persona';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['../../app.component.css']
})
export class PersonaComponent {
  personaArray: Persona[] = [];

  constructor() {
    this.loadPersonas();
  }

  loadPersonas() {
    const storedData = localStorage.getItem('personas');
    if (storedData) {
      this.personaArray = JSON.parse(storedData);
    }
  }

  savePersonas() {
    localStorage.setItem('personas', JSON.stringify(this.personaArray));
  }

  get total(): number {
    return this.personaArray.length;
  }

  selectedPersona: Persona = new Persona();
  searchText: string = ''; 

  addOrEdit() {
    if (this.selectedPersona.nombre && this.selectedPersona.apellido && this.selectedPersona.fechaNacimiento) {
      if (this.selectedPersona.id === 0) {
        this.selectedPersona.id = this.personaArray.length + 1;
        this.personaArray.push(this.selectedPersona);
      } else {
        const index = this.personaArray.findIndex(persona => persona.id === this.selectedPersona.id);
        if (index > -1) {
          this.personaArray[index] = { ...this.selectedPersona };
        }
      }
      this.savePersonas();
      this.selectedPersona = new Persona();
    }
  }

  openForEdit(persona: Persona) {
    this.selectedPersona = { ...persona };
  }

  delete(persona: Persona) {
    const confirmation = confirm("¿Estás seguro de eliminar esto?");
    if (confirmation) {
      const index = this.personaArray.indexOf(persona);
      if (index > -1) {
        this.personaArray.splice(index, 1);
        this.savePersonas();
      }
    }
  }

  get localStorageData() {
    return JSON.parse(localStorage.getItem('personas') || '{}');
  }
}