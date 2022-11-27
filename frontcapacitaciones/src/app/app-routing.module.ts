import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CursoComponent } from './components/curso/curso.component';
import { AddCursoComponent } from './components/add-curso.component';
import { EditCursoComponent } from './components/edit-curso.component';

const rutas: Routes = [
  { path: "", component: CursoComponent },
  { path: "crear", component: AddCursoComponent },
  { path: "editar/:id", component: EditCursoComponent }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(rutas)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
