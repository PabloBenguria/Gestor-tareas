import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Tarea } from '../../models/tarea';
import { TareaService } from '../../services/tarea.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tareas-crear',
  templateUrl: './tareas-crear.component.html',
  styleUrls: ['./tareas-crear.component.css']
})
export class TareasCrearComponent implements OnInit {

  tarea: any = {};

  constructor(private tareaService: TareaService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {

  }

  gotoList() {
    this.router.navigate(['/tareas']);
  }

  addTarea(form: NgForm) {
    form.idUsuario = 1;
    form.estado = 'Pendiente';
    this.tareaService.addTarea(form)
    .subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

}
