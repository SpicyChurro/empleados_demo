import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado-puesto',
  templateUrl: './empleado-puesto.component.html',
  styleUrls: ['../../app.component.css']
})
export class EmpleadoPuestoComponent {
  selectedPersonaId: number = 0;
  selectedPuestoId: number = 0;
  selectedRelation: Relation | null = null;

  relations: Relation[] = [];
  personas: Persona[] = []; 
  puestos: Puesto[] = []; 

  constructor() {
    this.loadRelations();
    this.loadPersonas();
    this.loadPuestos(); // Load the puestos data
  }

  loadRelations() {
    const storedData = localStorage.getItem('relations');
    if (storedData) {
      this.relations = JSON.parse(storedData);
    }
  }

  loadPersonas() {
    const storedData = localStorage.getItem('personas');
    if (storedData) {
      this.personas = JSON.parse(storedData);
    }
  }

  loadPuestos() {
    const storedData = localStorage.getItem('puestos');
    if (storedData) {
      this.puestos = JSON.parse(storedData);
    }
  }

  saveRelations() {
    localStorage.setItem('relations', JSON.stringify(this.relations));
  }

  get total(): number {
    return this.relations.length;
  }
  searchText: string = ''; 

  addRelation() {
    const selectedPersonaId = this.selectedPersonaId;
    const selectedPuestoId = this.selectedPuestoId;
  
    if (selectedPersonaId && selectedPuestoId) {
      const newRelation: Relation = {
        personaId: selectedPersonaId,
        puestoId: selectedPuestoId,
      };
  
      if (this.selectedRelation === null) {
        this.relations.push(newRelation);
      } else {
        const index = this.relations.findIndex(
          relation => relation.personaId === this.selectedRelation?.personaId && relation.puestoId === this.selectedRelation?.puestoId
        );
        if (index > -1) {
          this.relations[index] = newRelation;
        }
      }
  
      this.saveRelations();
  
      this.selectedPersonaId = 0;
      this.selectedPuestoId = 0;
      this.selectedRelation = null;
    }
  }
  
  openForEdit(relacion: Relation) {
    this.selectedRelation = { ...relacion };
    this.selectedPersonaId = relacion.personaId;
    this.selectedPuestoId = relacion.puestoId;
  }
  delete(relacion: Relation) {
    const confirmation = confirm("Are you sure you want to delete this?");
    if (confirmation) {
      const index = this.relations.indexOf(relacion);
      if (index > -1) {
        this.relations.splice(index, 1);
        this.saveRelations();
      }
    }
  }

  get localStorageData() {
    const storedData = localStorage.getItem('relations');
    return JSON.parse(storedData || '{}');
  }
}

interface Relation {
  personaId: number;
  puestoId: number;
}

interface Persona {
  id: number;
  nombre: string;
  apellido: string;
}

interface Puesto {
  id: number;
  nombre: string;
}