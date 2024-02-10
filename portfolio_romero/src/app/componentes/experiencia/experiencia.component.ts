import { Component, OnInit } from '@angular/core'; 
@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  show = false;  
  Experiencia: any= [
    {
    "empresa": "Javascript developer" ,
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
  constructor() { }

  ngOnInit(): void {
 
  }
 
}