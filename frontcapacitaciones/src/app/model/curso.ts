export class Curso {
    id?: number;
    institucion: string;
    titulo: string;
    finalizado: boolean;
    fecha: string;

    constructor(institucion: string, titulo: string, finalizado: boolean, fecha: string) {
        this.institucion = institucion;
        this.titulo = titulo;
        this.finalizado = finalizado;
        this.fecha = fecha;
    }
}
