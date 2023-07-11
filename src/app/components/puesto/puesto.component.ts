import { Component } from '@angular/core';
import { Puesto } from './puesto';

@Component({
  selector: 'app-puesto',
  templateUrl: './puesto.component.html',
  styleUrls: ['../../app.component.css']
})
export class PuestoComponent {
  puestoArray: Puesto[] = [];
  total: number = 0;
  selectedPuesto: Puesto = new Puesto();
  searchText: string = ''; 

  constructor() {
    this.loadPuestos();
    this.calculateTotal();
  }

  loadPuestos() {
    const storedData = localStorage.getItem('puestos');
    if (storedData) {
      this.puestoArray = JSON.parse(storedData);
    }
  }

  savePuestos() {
    localStorage.setItem('puestos', JSON.stringify(this.puestoArray));
  }

  calculateTotal() {
    this.total = this.puestoArray.length;
  }

  addOrEdit() {
    if (this.selectedPuesto.nombre) {
      if (this.selectedPuesto.id === 0) {
        this.selectedPuesto.id = this.puestoArray.length + 1;
        this.puestoArray.push(this.selectedPuesto);
      } else {
        const index = this.puestoArray.findIndex(puesto => puesto.id === this.selectedPuesto.id);
        if (index > -1) {
          this.puestoArray[index] = { ...this.selectedPuesto };
        }
      }
      this.savePuestos();
      this.selectedPuesto = new Puesto();
      this.calculateTotal();
    }
  }

  openForEdit(puesto: Puesto) {
    this.selectedPuesto = { ...puesto };
  }

  delete(puesto: Puesto) {
    const confirmation = confirm("¿Estás seguro de eliminar esto?");
    if (confirmation) {
      const index = this.puestoArray.indexOf(puesto);
      if (index > -1) {
        this.puestoArray.splice(index, 1);
        this.savePuestos();
        this.calculateTotal();
      }
    }
  }

  get localStorageData() {
    return JSON.parse(localStorage.getItem('puestos') || '{}');
  }
}