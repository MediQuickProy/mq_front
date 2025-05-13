export class Examen {
    id: string;
    paciente_id: string;
    fecha: Date;
    path_archivo: string;
    prediccion: string;
    confianza: number;

    constructor(id: string, paciente_id: string, fecha: Date, path_archivo: string, prediccion: string, confianza: number) {
        this.id = id;
        this.paciente_id = paciente_id;
        this.fecha = fecha;
        this.path_archivo = path_archivo;
        this.prediccion = prediccion;
        this.confianza = confianza;
    }
}