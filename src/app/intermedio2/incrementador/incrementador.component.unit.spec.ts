import { IncrementadorComponent } from "./incrementador.component";

/**
 * 
 * 
 *              PRUEBAS UNITARIAS 🔥 
 * 
 * De esta manera se pueden separar los test de integracion y los unitarios
 * simplmente hay que crear otro fichero spec con la extension unit, Pj: abc.component.unit.spec.ts
 */

describe('Componente Incrementar Unit', () => {
    let componente: IncrementadorComponent;
    
    
    beforeEach(() => {
        componente = new IncrementadorComponent();
    });

    it('No debe de pasar de 100 el progreso', () => {
        componente.progreso = 50;
        componente.cambiarValor(5);
        expect(componente.progreso).toBe(55);
    });
});