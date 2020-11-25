import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

/**
 * 
 *              PRUEBAS DE INTEGRACION 🔥 
 * 
 */
describe('Incremendator Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ IncrementadorComponent ],
            imports: [ FormsModule ]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;

    });

    it('Se debe de crear el componente Incrementador', () => {

        expect(component).toBeTruthy();
    });

    it('Debe de mostrar la leyenda en el <h3>', () => {
        
        component.leyenda = 'Progreso de carga';

        /**
         * Hay que invocar el disparador de cambios ya que en los test
         * no es automatico como en angular una vez la aplicacion en marcha
         */
        fixture.detectChanges();
        
        //query devuelve el primero elemento html que se encuentre
        const elem: HTMLElement = fixture.debugElement.query( By.css('h3') ).nativeElement;

        expect(elem.innerHTML).toContain('Progreso de carga');
    });


    it('Debe de mostrar en el input el valor del progreso', () => {
        
        component.cambiarValor(5);

        fixture.detectChanges();
        
        /**
         * Como la deteccion de cambios puede demorar un poco
         * se puede utilizar el whenStable que se espera para que 
         * acabe el ciclo de cambios detectChanges()
         */
        fixture.whenStable().then( () => {
            
            const input = fixture.debugElement.query( By.css('input') );
            const elem: HTMLInputElement = input.nativeElement;
    
            expect(elem.value).toBe( '55' );
        });
    });

    // Comprobar el evento sobre un elemento html
    it('Debe de incrementar/decrementar en 5, con un click del boton', () => {
        
        //QqueryAll devuelve un arreglo con los elementos html que conciden en el By.css
        const botones = fixture.debugElement.queryAll( By.css('.btn.btn-primary') );
        
        // este boton resta -5
        botones[0].triggerEventHandler('click', null); // Simular el click del boton
        expect(component.progreso).toBe( 45 );
        
        // este boton suma +5
        botones[1].triggerEventHandler('click', null);
        expect(component.progreso).toBe( 50 );

    });


    it('Debe de mostrar el progreso en el <h3> al incrementar', () => {
        
        const btnIncrementar = fixture.debugElement.queryAll( By.css('.btn.btn-primary') );
        const elem: HTMLElement = fixture.debugElement.query( By.css('h3') ).nativeElement;
        
        btnIncrementar[1].triggerEventHandler('click', null);
        fixture.detectChanges();

        expect(component.progreso).toBe( 55 );
        expect(elem.innerHTML).toContain('55');
    });

});
