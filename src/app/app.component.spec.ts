import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterOutlet } from '@angular/router';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach( () => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        RouterTestingModule
      ],
      /**
       * Con NO_ERRORS_SCHEMA ignora todas las demas directivas que no son propias del componente,
       * si queremos validar unicamente este componente.
       */
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });



  it('should create the app', () => {
    expect(component).toBeTruthy();
  });


  
  it('Debe de existir router-outlet', () => {
    
    const routerOutlet = fixture.debugElement.query( By.directive(RouterOutlet) );
    expect(routerOutlet).not.toBeNull();
  });

});
