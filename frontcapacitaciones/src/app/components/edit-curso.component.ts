import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from '../model/curso';
import { CursoService } from '../services/curso.service';

@Component({
  selector: 'app-edit-curso',
  templateUrl: './edit-curso.component.html',
  styleUrls: ['./edit-curso.component.css']
})
export class EditCursoComponent implements OnInit {

  //PARA QUE NO TIRE ERROR AL ASIGNARLE VALOR NULL,
  //AGREGAR EN "tsconfig.json" --> "strictNullChecks": false.
  curso: Curso = null;

  constructor(private cursoservice: CursoService, private router: Router, private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.cursoservice.getOne(id).subscribe({
      next: data => {
        alert("Está seguro que desea modificar este Curso?.");
        this.curso=data;
      }, error: err =>{
        alert("Error al editar Curso");
        this.router.navigate(['']);
      }
    })
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.cursoservice.update(id, this.curso).subscribe({
      next: data =>{
        alert("Curso modificado correctamente.");
        this.router.navigate(['']);
      }, error: err =>{
        alert("Error al modificar el Curso.");
        this.router.navigate(['']);
      }
    })
  }


}
