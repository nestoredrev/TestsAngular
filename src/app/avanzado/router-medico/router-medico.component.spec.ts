import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';

import { RouterMedicoComponent } from './router-medico.component';

// Test de navegacion
class FakeRouter {
  navigate ( params ){ }
}

class FakeActivatedRouter {
  // params: Observable<any> = of({});

  // Añadir propiedades o valores a un Observable
  private subject = new Subject<any>();

  push( valor ) {
    this.subject.next( valor );
  }

  get params() {
    return this.subject.asObservable();
  }
}


describe('RouterMedicoComponent', () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;

  beforeEach( () => {
    
    TestBed.configureTestingModule({
      declarations: [ RouterMedicoComponent ],
      imports: [

      ],
      providers: [
        {provide: Router, useClass: FakeRouter},
        {provide: ActivatedRoute, useClass: FakeActivatedRouter}
      ]
    });

    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;
  });



  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('Debe redireccionar a Medico cuando se guarde', () => {
    
    const router = TestBed.get( Router );
    const spy = spyOn(router, 'navigate');
    component.guardarMedico();
    expect(spy).toHaveBeenCalledWith(['medico', '123']);
  });

  it('Debe de colocar id = nuevo', async () => {
    
    const  activatedRoute: FakeActivatedRouter = TestBed.get( ActivatedRoute );
    
    fixture.detectChanges();

    activatedRoute.push( {id: 'nuevo'} );
    
    await fixture.whenStable().then( () => {
      expect(component.id).toBe('nuevo');
    });
  });
});
