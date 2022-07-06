import { Component, OnInit } from '@angular/core';
import { experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
@Component({
  selector: 'app-list-experiencia',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListExperiencia implements OnInit {
  experienciaList: experiencia[];
  constructor(public experienciaService: ExperienciaService) { }

  ngOnInit(): void {
    this.experienciaList = this.experienciaService.getExperiencias();
  }

}
