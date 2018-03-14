import { Component, OnInit } from '@angular/core';

import { Tarea } from '../models/tarea';
import { TareaService } from '../services/tarea.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

	tareas: Tarea[];

  constructor(private tareaService: TareaService) { }

  ngOnInit() {
  	this.getTareas();
  }

  getTareas(): void {
    this.tareaService.getTareas()
    .subscribe(tareas => this.tareas = tareas);
  }

}
