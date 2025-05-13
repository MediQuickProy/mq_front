export class Historial {
    id: string;
    paciente_id: string;
    fecha: Date;
    texto: string;
    resumen: string;
    insights: string;
    
    constructor(id: string, paciente_id: string, fecha: Date, texto: string, resumen: string, insights: string) {
        this.id = id;
        this.paciente_id = paciente_id;
        this.fecha = fecha;
        this.texto = texto;
        this.resumen = resumen;
        this.insights = insights;
    }
}
