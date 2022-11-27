import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/model/curso';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  cursos: Curso[] = [];

  constructor(private cursoService: CursoService) { }

  ngOnInit(): void {
    this.cargarCurso();
  }

  cargarCurso(): void {
    this.cursoService.list().subscribe(data => { this.cursos = data; })
  }

  borrarCurso(id?: number){
    alert("¿Seguro que desea eliminar el curso seleccionado?");
    if (id != undefined) {
      this.cursoService.delete(id).subscribe(data =>{
        alert("Curso eliminado exitosamente!");
        this.cargarCurso();
      }, err => {
        alert("No se pudo eliminar el curso seleccionado.")
      })
    }
  }


}
