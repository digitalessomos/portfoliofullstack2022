import { Component, OnInit } from '@angular/core'; 
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
@Component({
  selector: 'app-form-experiencia',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormExperiencia implements OnInit {

  constructor(public experienciaService: ExperienciaService) { }

  ngOnInit(): void {
  }

  
  agregarExperiencia(newEmpresa: HTMLInputElement,newPuesto: HTMLInputElement,newImg: HTMLInputElement,newStart: HTMLInputElement,newEnd: HTMLInputElement){
    
     this.experienciaService.addExperiencia({
       empresa: newEmpresa.value,
       puesto: newPuesto.value,
       img: newImg.value,
       start: newStart.value,
       end: newEnd.value,
       hide: true
     });
     
        
           newEmpresa.value = '';
           newPuesto.value = '';
           newImg.value = '';
           newStart.value = '';
           newEnd.value = ''; 
           return false;
         } 
}
