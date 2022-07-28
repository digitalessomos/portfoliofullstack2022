export class experiencia{
    id?:number = 0 ;
    empresa: String;
    puesto: String;
    img: String;
    start: String;
    end: String;
    responsabilidades: any;
    hide: boolean; 

    constructor(empresa:String, puesto:String,img:String,start:String,end:String,responsabilidades:any){
        this.empresa = empresa;
        this.puesto = puesto;
        this.img = img;
        this.start = start;
        this.end = end;  
        this.responsabilidades = responsabilidades;  
    }
}