export class Resultado {
    id:number;
    fecha:String;
    respuesta:String;
    examen?:number
constructor(id:number,fecha:String,respuesta:String,examen:number){
    this.id=id;
    this.fecha=fecha;
    this.respuesta=respuesta;
    this.examen=examen;
    
}
}
