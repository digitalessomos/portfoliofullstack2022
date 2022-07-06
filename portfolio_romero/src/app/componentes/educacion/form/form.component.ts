import { Component, OnInit } from '@angular/core'; 
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
 
 constructor(public EducacionService: EducacionService) { }

  ngOnInit(): void {
  }
  agregarEducacion(newInsitucion: HTMLInputElement,newTitulo: HTMLInputElement,newImg: HTMLInputElement,newInicio: HTMLInputElement,newFin: HTMLInputElement){
 if(newInsitucion.value === null){

 }else{
  this.EducacionService.addEducacion({
    institucion: newInsitucion.value,
    title: newTitulo.value,
    img: newImg.value,
    start: newInicio.value,
    end: newFin.value,
    hide: true
  });
 }
     
        newInsitucion.value = '';
        newTitulo.value = '';
        newImg.value = '';
        newInicio.value = '';
        newFin.value = ''; 
        return false;
      } 
}
