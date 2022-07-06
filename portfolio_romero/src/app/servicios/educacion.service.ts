import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion.model'; 

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  educaciones: Educacion[];

  constructor(private http: HttpClient) { 
    this.educaciones = [ //Datos guardados temporalmente en u8nh arreglo
   {
    "id":1, 
    "institucion":"Juan XXIII",
    "title":"Técnico en informática personal y profesional",
    "img":"./assets/img/logoedu1.jpg",
    "start":"2002",
    "end":"2005",
    "hide":true
},
{
    "id":2, 
    "institucion":"Udemy academy",
    "title":"Master en Javascript",
    "img":"./assets/img/logoedu2.png",
    "start":"Ago 2020",
    "end":"Nov 2020",
    "hide":true
},
{
    "id":3, 
    "institucion":"Google analytic Academy",
    "title":"Google analytic para principiantes",
    "img":"./assets/img/logogoogle.png",
    "start":"Jun 2020",
    "end":"Sep 2020",
    "hide":true
},
{
    "id":4, 
    "institucion":"OM Personal",
    "title":"Inglés B1 B2 C1 ",
    "img":"./assets/educacion/1.png",
    "start":"Nov 2015",
    "end":"Jul 2017",
    "hide":true
},
{
    "id":5, 
    "institucion":"Edutin",
    "title":"Francés A1 A2",
    "img":"./assets/img/edutin.png",
    "start":"Nov 2019",
    "end":"Ago 2020",
    "hide":true
}  
];
  }
 
  getEducaciones() {
    if(localStorage.getItem('educacionLS') === null) {
      return this.educaciones;
    }else {
      this.educaciones = JSON.parse(localStorage.getItem('educacionLS')!);
      return this.educaciones;
    }
   
  
  }

  addEducacion(educacion: Educacion) { 
   this.educaciones.push(educacion);
   let educations: Educacion[] = [];
    
   if(localStorage.getItem('educacionLS') === null) {
        educations.push(educacion);
        this.educaciones.concat(educations);
        localStorage.setItem('educacionLS', JSON.stringify(this.educaciones));
    } else {
        educations = JSON.parse(localStorage.getItem('educacionLS')!);
        educations.push(educacion);  
        localStorage.setItem('educacionLS', JSON.stringify(educations));
    }
  } 

   deleteEducacion(educacion: Educacion) {
    for (let i = 0; i < this.educaciones.length; i++) {
      if (educacion == this.educaciones[i]) {
        this.educaciones.splice(i, 1); 
        localStorage.setItem('educacionLS', JSON.stringify(this.educaciones));
      }
    }
  }
}
