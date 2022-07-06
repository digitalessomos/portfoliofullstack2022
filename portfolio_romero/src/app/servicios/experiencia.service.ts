import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { experiencia } from '../model/experiencia.model';
import { environment } from '../../../src/environments/environment';
@Injectable({
  providedIn: 'root'
})

export class ExperienciaService {
  experiencias: experiencia[];
  constructor(private http: HttpClient) {
    this.experiencias = [
      {
      "empresa":"Diseñador web",
      "puesto":"Freelancer",
      "img":"./assets/img/logoexp11.png.crdownload",
      "start":"2016",
      "end":"2018",
      "hide":true
  },
  {
      "empresa":"Backend developer",
      "puesto":"Freelancer",
      "img":"./assets/img/logoexp2.webp",
      "start":"Ago 2017",
      "end":"Oct 2019",
      "hide":true
  },
  {
      "empresa":"Frontend developer",
      "puesto":"Freelancer",
      "img":"./assets/img/logoexp333.png",
      "start":"2019",
      "end":"2022",
      "hide":true
  }
  ]
   }

 
   getExperiencias() {
    if(localStorage.getItem('experienciaLS') === null) {
      return this.experiencias;
    }else {
      this.experiencias = JSON.parse(localStorage.getItem('experienciaLS')!);
      return this.experiencias;
    }
   
  
  }

  addExperiencia(experiencia: experiencia) { 
   this.experiencias.push(experiencia);
   let experiences: experiencia[] = [];
    
   if(localStorage.getItem('experienciaLS') === null) {
        experiences.push(experiencia);
        this.experiencias.concat(experiences);
        localStorage.setItem('experienciaLS', JSON.stringify(this.experiencias));
    } else {
      experiences = JSON.parse(localStorage.getItem('experienciaLS')!);
      experiences.push(experiencia);  
        localStorage.setItem('experienciaLS', JSON.stringify(experiences));
    }
  } 

   deleteExperiencia(experiencia: experiencia) {
    for (let i = 0; i < this.experiencias.length; i++) {
      if (experiencia == this.experiencias[i]) {
        this.experiencias.splice(i, 1); 
        localStorage.setItem('experienciaLS', JSON.stringify(this.experiencias));
      }
    }
  }
}
