import { Component, OnInit } from '@angular/core';
import { educacion, Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/servicios/educacion.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
 educacionList: Educacion[];

 constructor(public EducacionService: EducacionService) { }

  ngOnInit(): void {
    this.educacionList = this.EducacionService.getEducaciones();
  }

}
