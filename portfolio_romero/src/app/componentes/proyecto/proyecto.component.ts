import { Component, OnInit } from '@angular/core'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  proyectoList: any=[
    {
      "nombre":"Proyecto de tienda virtual",
      "link":"https://mibarrio247.netlify.app",
      "img":"./assets/proyectos/4442.png",
      "fecha":"2021",
      "descripcion":"Los consumidores digitales pueden recibir sus compras en la puerta de su casa, entregas a tiempo y una logística eficiente para atraer mas consumidores.",
      "frontend":"Angular",
      "backend":"API-Firebase",
      "bd":"Firebase DB",
      "hide":true
    },
{
    "nombre":"Gestión de pedidos y entregas en repartos de agua",
    "link":"https://bidonesmono.netlify.app",
    "img":"./assets/4.png",
    "fecha":"2019",
    "descripcion":"Gestionar puntos de entregas, generación automática de rutas, y registro de clientes es lo principal que brinda esta web-app mejorando la experiencia del cliente en sus operaciones diarias.",
    "frontend":"Angular",
    "backend":"API-Firebase",
    "bd":"Firebase DB",
    "hide":true
},
{
  "nombre":"Practica de gestión simultanea de comercios digitales",
  "link":"https://mitiendavirtual10.netlify.app",
  "img":"../../../assets/proyectos/22.png",
  "fecha":"2020",
  "descripcion":"Implementación de un Sistema de Gestión de Pedidos para centralizar toda la información que circula por los distintos canales, el cual permite, además, hacer mejor uso de los recursos disponibles.",
  "frontend":"Angular",
  "backend":"API-Firebase",
  "bd":"Firebase DB",
  "hide":true
},
{
  "nombre":"Proyecto web para comercio electrónico con BD en FB",
  "link":"https://carritok.netlify.app/",
  "img":"./assets/proyectos/666.png",
  "fecha":"2019",
  "descripcion":"Aumentar las ventas, reducir los costos operativos y facilitar el proceso de compra mediante la implementación de una sólida solución de comercio electrónico.",
  "frontend":"Fragment (Comportamientos y partes de la interfaz de usuario)",
  "backend":"API-fetch API, LocalStorage API",
  "bd":"Localstorage",
  "hide":true
},
{
  "nombre":"Proyecto de negocio digital 24/7",
  "link":"https://comprorapido.netlify.app/",
  "img":"./assets/proyectos/5555.png",
  "fecha":"2020",
  "descripcion":"herramienta digital adaptada a las necesidades del negocio. Sistema personalizado en base a una visión integral  del negocio, con el foco puesto en las personas y en sintonía con las últimas tendencias tecnológicas y culturales",
  "frontend":"HTML CSS JS: InnerHTML,  sort, JSON Array",
  "backend":"Firebase-firestore (contact & login validating)",
  "bd":"Firebase collections",
  "hide":true
},
{
    "nombre":"Venta de bebidas online 24/7",
    "link":"https://bebidasya.netlify.app",
    "img":"./assets/5.png",
    "fecha":"2020",
    "descripcion":"Reducí costos, interactuar con tus clientes, expandir su productividad y optimizar sus procesos, recursos y costos sin tener que ampliar su personal a través de la implementación de esta  herramienta digital",
    "frontend":"HTML CSS JS: InnerHTML,  sort, JSON Array",
    "backend":"Firebase API, LocalStorage API",
    "bd":"Firebase Database(), LocalStorage",
    "hide":true
},
{
    "nombre":"Jardinería Ya",
    "link":"https://jardineriaya.netlify.app/",
    "img":"./assets/proyectos/111.png",
    "fecha":"2018",
    "descripcion":"MI servicio de diseño y desarrollo de sitios web aceleró su innovación, ingresos y sostenibilidad en base a metodologías y tecnologías de avanzada.",
    "frontend":"HTML CSS JS",
    "backend":"Firebase API for contact section",
    "bd":"Firebase Storage",
    "hide":true
}
]
  constructor(  public router: Router) { }

  ngOnInit(): void {
   
  }
/*
  redirect() {
    this.router.navigate(['crear-proyecto']);  
  }*/
}
  