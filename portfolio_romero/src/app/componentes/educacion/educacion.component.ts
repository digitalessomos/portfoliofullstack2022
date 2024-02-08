import { Component, OnInit } from '@angular/core'; 
@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  show = false;  
  edu2: any=[ 
    {
      "id":1, 
      "institucion":"Juan XXIII",
      "title":"Técnico en informática personal y profesional",
      "img":"./assets/img/logoedu1.jpg",
      "start":"2002",
      "end":"2005",
      "credencial":"../../../assets/educacion/cole2.jpg",
      "linkCredencial":"Solicitar original",
      "hide":true
  },
  {
      "id":2, 
      "institucion":"Udemy academy",
      "title":"Master en Javascript",
      "img":"./assets/img/logoedu2.png",
      "start":"Ago 2020",
      "end":"Nov 2020",
      "credencial":"../../../assets/educacion/meanUdemy.jpg",
      "linkCredencial":"https://udemy-certificate.s3.amazonaws.com/image/UC-8f9db880-f8f6-46d0-b442-a300e1e41412.jpg",
      "hide":true
  },
  {
      "id":3, 
      "institucion":"Google analytic Academy",
      "title":"Google analytic para principiantes",
      "img":"./assets/img/logogoogle.png",
      "start":"Jun 2020",
      "end":"Sep 2020",
      "credencial":"../../../assets/educacion/analytic.png",
      "linkCredencial":"https://analytics.google.com/analytics/academy/certificate/rYWB0O8OQJCTgOngyUFWrw",
      "hide":true
  },
  {
      "id":4, 
      "institucion":"OM Personal",
      "title":"Inglés B1 B2 C1 ",
      "img":"./assets/educacion/1.png",
      "start":"Nov 2015",
      "end":"Jul 2017",
      "credencial":"../../../assets/educacion/c3.jpg",
      "linkCredencial":"Solicitar original",
      "hide":true
  },
  {
      "id":5, 
      "institucion":"Edutin",
      "title":"Francés A1 A2",
      "img":"./assets/img/edutin.png",
      "start":"Nov 2019",
      "end":"Ago 2020",
      "credencial":"../../../assets/educacion/Certificado1.png",
      "linkCredencial":"https://edutin.com/certifications/view/2254909",
      "hide":true
  }  
 

]
  constructor() { }

  ngOnInit(): void {
   
  } 
} 