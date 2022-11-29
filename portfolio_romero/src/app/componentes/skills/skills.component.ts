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
    "habilidad":"Web designer",
    "img":"./assets/front2.png", 
    "responsabilidades":
    [
    "Comprension de web markup, como HTML5/CSS.",
    "Controlar tipografías, plantillas, formas del diseño y la interactividad.",
    "Conocimientos en Vanilla JS, jQuery, Java, C++, PHP ",
    "Adaptar el diseño de una web a diversos dispositivos y navegadores.", 
    "Sólida comprensión de la teoría del color.", 
    "Combinar facilidad de uso de un sitio y la integración de elementos interactivos y dinámicos",
    "Diseñar un sitio web que sea visualmente atractivo.",
    "Comprender funcionamiento básico de servidores web"
    /*
    "Conocimiento de Algoritmos y estructuras de datos.", 
    "Experiencia con Ajax and Websockets.",
    "Experiencia con servicios API REST y diseño de interfaces",
    "Conocimiento de Bases de Datos y lenguaje de consultas estructurado."
    */
  ],
  "hide":true
},
{
    "habilidad":"Client layer",
    "img":"./assets/ang2.png",
    "responsabilidades":
    [
    "Sólida experiencia en el uso de módulos, servicios, enrutamiento y comunicaciones HTTP, formas reactivas y Lazy lading",
    "Facilidad para crear contenido dinámico a trávez del data-binding. Mis componentes se comunican muy simplemente.",
    "Asegurar la accesibilidad",
    "Asignar un comportamiento especial a las directivas en elementos del DOM.",
    "Consumo de APIs para conectar la web con servicios y sistemas.",
    "Implementación teniendo como entrada las especificaciones de software ", 
    "Conocimiento de Programación Orientada a Objetos y Clases."/*,
    "Construir o adaptar clases en TypeScript, módulos u otras piezas de software"*/
],
"hide":true
}

]
 /*------------------------------------*/
skillBack: any=[  
{
  "habilidad":"Server layer",
  "img":"../assets/sl1.webp",
  "responsabilidades":
  [
  "Al menos 4 años de experiencia escribiendo código backend en lenguajes Nodejs, Java, PHP",
  "Al menos 3 años de servicios web/API REST experiencia personal comprobable en la integración de aplicaciones", 
    /*
  "At least 3 years of Web Services / REST APIs verifiable work experience integrating applications", 
  "At least 4 years of verifiable JS web development work experience.",
  */ 
  "Manejar peticiones HTTP del browser al servidor", 
  "llamar funciones del routing para tratar lo que el usuario pida via navegador.", 
  "Procesar objetos recibidos del navegador a través de middlewares.",
  "Dividir mi app en partes, a delegar tareas.",
  "Procesar datos del usuario insertados en la interfaz."
],
"hide":true
},
{
  "habilidad":"Databases",
  "img":"../assets/db2.jpg",
  "responsabilidades":
  [
  "Extensa experiencia en el desarrollo, implementación y mantenimiento de aplicaciones usando MongoDB, MySQl y firebase DB",
  "Fuerte comprensión del diseño y optimización de bases de datos relacionales y no relacionales.", 
  "Excelentes habilidades de consulta SQL y NoSQL.",
  "Operaciones de creación, lectura, actualización y eliminación (CRUD)", 
  "Diseño y cracion bases de datos y sus interfaces frontales para uso interno y externo,",
  "Experiencia comprobada con operadores SQL, filtrado de datos.", 
  "Diseñar un esquema de base de datos."
],
"hide":true
},
{
  "habilidad":"Hoisting",
  "img":"../assets/git2.png",
  "responsabilidades":
  [
  "Conocimiento de herramientas de control de versiones como GIT.",
  "Más de 6 años de experiencia creando repositorios",
  "Extensa experiencia configurando ramas, commits, merge y pull requests.",
  "Extensa experiencia con GitHub Pages alojando proyectos convirtiendolos en sitios web.",
  "Más de 20 sitios desplegados continuamente con Netlify (Github Pages con super-poderes)",
  "Más de 5 años usando web service: Heroku, netlify y Firebase"
],
"hide":true
}
]

skillSoft: any=[
{
  "habilidad":"Idiomas x 3",
  "img":"../assets/idioms.png",
  "responsabilidades":
  [
    "Conocimientos avanzados de inglés. Habilidades avanzadas de comunicación oral y escrita en inglés",
    "Cinco certificados de experiencia comprobable en Inglés.",
    "Conocimientos intermedios de francés. Habilidades de comunicación oral avanzada y francés escrito intermedio",
    "Dos certificados de experiencia comprobable en Francés",
   "Comprender y producir textos escritos tanto en Inglés como en Francés para poder traducir", 
   "Comprender y producir textos orales en ambos idiomas para poder interpretar."  
],
"hide":true
},
{
  "habilidad":"Conversational skills",
  "img":"../assets/grupal.png",
  "responsabilidades":
  [
  "Excelentes habilidades de comunicación",
  "Conocimiento de metodologías ágiles como SCRUM",
  "Conocimiento de metodologías de análisis como UML u otros.",
  "Autosuficiencia, pensamiento crítico y capacidad de toma de decisiones.", 
  "Flexible y adaptable a diferentes necesidades, con la capacidad de volver a priorizar las tareas según sea necesario.",
  "Nociones de arquitectura de software y aplicaciones N-Capas",
  "Mucha creatividad y organización, además de alto compromiso con el proyecto" 
],
"hide":true
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
 