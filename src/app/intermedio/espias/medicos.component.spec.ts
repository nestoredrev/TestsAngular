import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';

import { from, throwError } from 'rxjs';

describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    const servicio = new MedicosService(null);

    beforeEach( () => {
        
        // Inicializar el componente
        componente = new MedicosComponent(servicio);


    });


    it('Init: debe de cargar los medicos', () => {

        const medicos = ['medico"', 'medico2', 'medico3'];

        /*
            spyOn simula la llamada del servicio getMedicos 
            devolvuendo un observable (ya que http.get devuelve un observable) sin la necesidad de llamar
            el servicio en si ya que en la pruebas unitarias hay que probar el componente aislado del 
            resto de componentes o servicios
        */
        spyOn( servicio, 'getMedicos' ).and.callFake( () => {
            return from([ medicos ])
        });

        componente.ngOnInit();
        expect( componente.medicos.length ).toBeGreaterThan(0);
    });

    
    //Testear la llamada de una subscripcion
    it('Debe de llamar el servidor para agregar un medico', () => {
        
        const espia = spyOn(servicio, 'agregarMedico').and.callFake( medico => {
            return from([])
        });

        componente.agregarMedico();
        expect(espia).toHaveBeenCalled();
    });


    // Testear la respuesta de una subscripcion
    it('Debe de agregar un nuevo medico al arreglo de medicos', () => {
        
        const medico = { id: 1, nombre: 'Nestor' };
        
        // Simular una insercion de un medico en el array de medicos en el componente (this.medicos)
        spyOn( servicio, 'agregarMedico' ).and.returnValue( from([medico]) );
        
        componente.agregarMedico();
        
        //Comprueba si se ha insertado correctamente el nuevo medico
        expect( componente.medicos.indexOf(medico) ).toBeGreaterThanOrEqual(0);
    });

    // Testear el error de una subscripcion
    it('Si falla la adicion, la propiedad mensajeError debe de ser igual al error del servicio', () => {
        
        const miError = "No se puedo agregar el medico";

        spyOn(servicio,'agregarMedico').and.returnValue( throwError(miError) );
        
        componente.agregarMedico();

        expect(componente.mensajeError).toBe(miError);
    });


    it('Debe de llamar el servidor para borrar el medico', () => {
        
        spyOn(window, 'confirm').and.returnValue(true);

        const espia = spyOn( servicio, 'borrarMedico' ).and.returnValue( from([]) );

        componente.borrarMedico('1');

        expect( espia ).toHaveBeenCalledWith('1');
    });

    it('NO! Debe de llamar el servidor para borrar el medico', () => {
        
        spyOn(window, 'confirm').and.returnValue(false);

        const espia = spyOn( servicio, 'borrarMedico' ).and.returnValue( from([]) );

        componente.borrarMedico('1');

        //toHaveBeenCalledWith: Que el servico se esta llamando con parametros de entrada
        expect( espia ).not.toHaveBeenCalledWith('1');
    });


});
