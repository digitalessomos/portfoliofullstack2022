import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class skillsComponent implements OnInit {
  
  skillFront: any=[

    {
    "habilidad":"Diseñador web",
    "img":"./assets/front2.png", 
    "responsabilidades":
    [
    "Comprension de web markup, como HTML5/CSS.",
    "Controlar tipografías, plantillas, formas del diseño y la interactividad.",
    "Adaptar el diseño de una web a diversos dispositivos y navegadores.", 
    "Conocimiento de Algoritmos y estructuras de datos.", 
    "Experiencia con Ajax and Websockets.",
    "Experiencia con servicios API REST y diseño de interfaces",
    "Conocimiento de Bases de Datos y lenguaje de consultas estructurado."
  ]
},
{
    "habilidad":"Angular",
    "img":"./assets/ang2.png",
    "responsabilidades":
    [
    "Sólida experiencia en el uso de módulos, servicios, enrutamiento y comunicaciones HTTP, formas reactivas y Lazy lading",
    "Facilidad para crear contenido dinámico a trávez del data-binding. Mis componentes se comunican muy simplemente.",
    "Asegurar la accesibilidad",
    "Asignar un comportamiento especial a las directivas en elementos del DOM.",
    "Consumo de APIs para conectar la web con servicios y sistemas.",
    "Implementación teniendo como entrada las especificaciones de software ", 
    "Conocimiento de Programación Orientada a Objetos y Clases.",
    "Construir o adaptar clases en TypeScript, módulos u otras piezas de software"
]
}

]
 /*------------------------------------*/
skillBack: any=[  
{
  "habilidad":"Back end",
  "img":"../assets/node2.png",
  "responsabilidades":
  [
  "At least 3 years of Web Services / REST APIs verifiable work experience integrating applications", 
  "At least 4 years of verifiable JS web development work experience.", 
  "Manejar peticiones HTTP del browser al servidor", 
  "llamar funciones del routing para tratar lo que el usuario pida via navegador.", 
  "Procesar objetos recibidos del navegador a través de middlewares.",
  "Dividir mi app en partes, a delegar tareas.",
  "Procesar datos del usuario insertados en la interfaz."
]
} 
]

skillSoft: any=[ 
{
  "habilidad":"Hoisting",
  "img":"../assets/git2.png"
},
{
  "habilidad":"Idiomas x 3",
  "img":"../assets/idioms.png"
},
{
  "habilidad":"Conversational skills",
  "img":"../assets/grupal.png"
}
]
  constructor(public router: Router) { }

  ngOnInit(): void {
  

  }
/*
  redirect() {
    this.router.navigate(['crear-skill']);  
  }
*/
}
 