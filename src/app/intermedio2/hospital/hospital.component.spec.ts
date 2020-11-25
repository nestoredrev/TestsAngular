import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalComponent } from './hospital.component';

// Esto es un fichero de spec creado automaticamente por el CLI de Angular
describe('HospitalComponent', () => {
  let component: HospitalComponent;
  let fixture: ComponentFixture<HospitalComponent>;

  /**
   * asyc es para esperar para que acabe la creacion del componente
   * el compileComponents() como su nombre indica compila el componente
   *  ambas funciones no son necesarias ya que como angular utiliza webpack 
   * el html y el typescript estan el mismo lugar 
   */

    // beforeEach(async(() => {
    //   TestBed.configureTestingModule({
    //     declarations: [ HospitalComponent ]
    //   })
    //   .compileComponents();
    // }));

  beforeEach(() => {

      TestBed.configureTestingModule({
        declarations: [ HospitalComponent ],
        imports: [],
        providers: []
      })

    fixture = TestBed.createComponent(HospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Dispara el ciclo de deteccion de cambios de Angularc
  });

  it('Debe de crear el componente Hospital', () => {
    expect(component).toBeTruthy();
  });
});
