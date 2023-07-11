import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'empleados_demo';
  constructor(private router: Router) {}
  isRootLink(): boolean {
    return this.router.url === '/';
  }
}