import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasCrearComponent } from './tareas-crear.component';

describe('TareasCrearComponent', () => {
  let component: TareasCrearComponent;
  let fixture: ComponentFixture<TareasCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TareasCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TareasCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
