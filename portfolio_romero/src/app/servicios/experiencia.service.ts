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
      "empresa":"Javascript developer",
      "puesto":"Freelancer",
      "img":"./assets/exp/5.jpg",
      "start":"2016 - 2018",
      "end":"",
      "hide":true,
      "responsabilidades":[
        "Modificar diseños y especificaciones de aplicaciones complejas.", 
        "Comprender el requerimiento de software.",
        "Modelizar y refinar especificaciones a fin de determinar un diseño detallado para implantar la funcionalidad requerida.", 
        "Trabajar para construir aplicaciones con foco en la funcionalidad." 
      ],
      "tecnos":[
        "./assets/exp/t1.png", 
        "./assets/exp/t2.jpg",
        "./assets/exp/t3.ico", 
        "./assets/exp/t4.jpg" 
      ]
  },
  {
      "empresa":"Backend developer",
      "puesto":"Freelancer",
      "img":"./assets/exp/3.jpg",
      "start":"Ago 2017 - Oct 2019",
      "end":"",
      "hide":true,
      "responsabilidades":[
        "Participar en el desarrollo de aplicaciones web personalizadas o proyectos de integración de back-end", 
        "Crear, integrar y gestionar bases de datos.",
        "Almacenar datos y también asegúrarse de que se muestren al usuario mediante Node y SpringBoot.", 
        "Administrar las funciones de la API." 
      ],
      "tecnos":[
        "./assets/exp/t5.jpg", 
        "./assets/exp/t6.png",
        "./assets/exp/t7.png", 
        "./assets/exp/t8.jpg" 
      ]
  },
  {
      "empresa":"Frontend developer",
      "puesto":"Freelancer",
      "img":"./assets/exp/4.jpg",
      "start":"2019 - 2022",
      "end":"",
      "hide":true,
      "responsabilidades":[
        "Llevar adelante los diseños digitales: home page, landings y piezas digitales para web, alineados al manual de marca.", 
        "Maquetar los diseños para su implementación.",
        "Asegurar la accesibilidad.", 
        "consumo de APIs para conectar la web con servicios y sistemas." 
      ],
      "tecnos":[
        "./assets/exp/t9.jpg", 
        "./assets/exp/t10.png",
        "./assets/exp/t11.png", 
        "./assets/exp/t12.png" 
      ]
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
