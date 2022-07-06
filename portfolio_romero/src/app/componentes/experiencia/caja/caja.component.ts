import { Component, OnInit, Input } from '@angular/core';
import { experiencia } from 'src/app//model/experiencia.model';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-caja-experiencia',
  templateUrl: './caja.component.html',
  styleUrls: ['./caja.component.css']
})
export class CajaExperiencia implements OnInit {
  @Input() experiencia: experiencia;
  constructor(public experienciaService: ExperienciaService) { }

  ngOnInit(): void {
  }

  eliminarExperiencia(experiencia: experiencia){
    if(confirm('Seguro desea eliminarlo')){
      this.experienciaService.deleteExperiencia(experiencia);
    }
  }
}
