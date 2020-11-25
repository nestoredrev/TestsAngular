import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MedicoComponent } from './medico.component';
import { MedicoService } from './medico.service';

// Esto es un fichero de spec creado a mano desde 0
describe('Medico Component', () => {
    
    let componente: MedicoComponent;
    let fixture: ComponentFixture<MedicoComponent>;
    
    //Configuracion de las pruebas de integracion
    beforeEach(() => {
        // Configura e inicializa el entorno para pruebas unitarias y 
        // proporciona métodos para crear componentes y servicios en pruebas unitarias.
        TestBed.configureTestingModule({
            declarations: [
                MedicoComponent
            ],
            providers: [MedicoService], // en los test hay que añadir los servicios
            imports: [HttpClientTestingModule] // necesario importar el modulo para usar el servicio en el testing
        });
        
        // Acceder a la parte html (siclo deteccion de cambios o hacer queries )
        fixture = TestBed.createComponent ( MedicoComponent );
        
        // Acceder a metodos y propiedades del componente
        componente = fixture.componentInstance;
    });

    it('Debe de crearse el componente', () => {
        expect(componente).toBeTruthy();
    });

    it('Debe de retornar el nombre del medico', () => {
        
        const nombre = 'Nestor';
        const respuesta = componente.saludarMedico( nombre );
        expect(respuesta).toContain(nombre);
        
    });

});