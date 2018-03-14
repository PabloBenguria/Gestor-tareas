import { Component, OnInit } from '@angular/core';

import { Tarea } from '../../models/tarea';
import { TareaService } from '../../services/tarea.service';

@Component({
  selector: 'app-tareas-crear',
  templateUrl: './tareas-crear.component.html',
  styleUrls: ['./tareas-crear.component.css']
})
export class TareasCrearComponent implements OnInit {

  tarea: Tarea;

  constructor(private tareaService: TareaService) { }

  ngOnInit() {
  	this.addTarea();
  }

  addTarea(): void {
    this.tareaService.addTarea(this.tarea)
    .subscribe(tarea => this.tarea = tarea);
  }

}
