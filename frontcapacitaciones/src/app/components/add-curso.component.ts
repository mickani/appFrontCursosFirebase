import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CursoService } from '../services/curso.service';
import { Curso } from 'src/app/model/curso';

@Component({
  selector: 'app-add-curso',
  templateUrl: './add-curso.component.html',
  styleUrls: ['./add-curso.component.css']
})
export class AddCursoComponent implements OnInit {

  institucion: string = '';
  titulo: string = '';
  finalizado!: boolean;
  fecha: string = '';

  constructor(private cursoservices: CursoService, private router: Router) { }

  ngOnInit(): void {
    // this.onCreate();
  }

  onCreate(): void {
    const curso = new Curso(this.institucion, this.titulo, this.finalizado, this.fecha);
    this.cursoservices.save(curso).subscribe({
      next: data => {
        alert("Curso creado exitosamente.");
        this.router.navigate(['']);
      }, error: err => {
        alert("No se pudo crear un curso nuevo.");
        this.router.navigate(['']);
      }
    })
  }

}
