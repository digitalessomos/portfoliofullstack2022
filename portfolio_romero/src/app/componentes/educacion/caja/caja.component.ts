import { Component, OnInit, Input } from '@angular/core';
import { educacion, Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-caja',
  templateUrl: './caja.component.html',
  styleUrls: ['./caja.component.css']
})
export class CajaComponent implements OnInit {
  @Input() educacion: Educacion;
 
  constructor(public EducacionService: EducacionService) { }

  ngOnInit(): void {
  }

  eliminarEducacion(educacion: Educacion){
    if(confirm('Seguro desea eliminarlo')){
      this.EducacionService.deleteEducacion(educacion);
    }
  }
 
}
