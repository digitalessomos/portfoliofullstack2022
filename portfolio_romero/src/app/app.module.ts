import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { skillsComponent } from './componentes/skills/skills.component';

import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProyectoComponent } from './componentes/proyecto/proyecto.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PortfolioService } from './servicios/portfolio.service';
import { EducacionService } from './servicios/educacion.service';
import { ExperienciaService } from './servicios/experiencia.service';

import { InterceptorService } from './servicios/interceptor.service';
import { ModalComponent } from './componentes/modal/modal.component';

import { FormComponent } from './componentes/educacion/form/form.component';
import { ListComponent } from './componentes/educacion/list/list.component';
import { CajaComponent } from './componentes/educacion/caja/caja.component';  

import { FormExperiencia } from './componentes/experiencia/form/form.component';
import { ListExperiencia } from './componentes/experiencia/list/list.component';
import { CajaExperiencia } from './componentes/experiencia/caja/caja.component';  


@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercadeComponent,
    EducacionComponent,
    ExperienciaComponent,
    skillsComponent,
    ProyectoComponent,
    IniciarSesionComponent,
    PortfolioComponent,
    ModalComponent,
    FormComponent,
    ListComponent,
    CajaComponent,
    FormExperiencia,
    ListExperiencia,
    CajaExperiencia 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule, 
    NgCircleProgressModule.forRoot({})
  ],
  providers: [PortfolioService,EducacionService,ExperienciaService,
    {provide: HTTP_INTERCEPTORS, useClass:InterceptorService, multi: true}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
