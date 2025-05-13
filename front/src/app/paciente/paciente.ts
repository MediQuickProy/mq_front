export class Paciente {
    id: string;
    nombre: string;
    documento: string;
    fecha_nacimiento: Date;
    sexo: string; 
    
    constructor(id: string, nombre: string, documento: string, fecha_nacimiento: Date, sexo: string) {
        this.id = id;
        this.nombre = nombre;
        this.documento = documento;
        this.fecha_nacimiento = fecha_nacimiento;
        this.sexo = sexo;
    }
}
