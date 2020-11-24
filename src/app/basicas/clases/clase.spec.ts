import { Jugador } from './clase';
// Testear unicamente este spec.ts
// ng test --main=src/app/basicas/clases/clase.spec.ts

describe('Pruebas de clases', () => {
    
    let jugador = new Jugador();

    beforeEach(() => {
        jugador = new Jugador();
    });

    it('Debe de retornar 80hp si recibe 20 de daño', () => {
        
        const respuesta = jugador.recibeDanio(20);
        expect(respuesta).toBe(80);
    });

    it('Debe de retornar 50hp si recibe 50 de daño', () => {
        
        const respuesta = jugador.recibeDanio(50);
        expect(respuesta).toBe(50);
    });

    it('Debe de retornar 0hp si recibe mas de 100 de daño', () => {
        
        const respuesta = jugador.recibeDanio(100);
        expect(respuesta).toBe(0);
    });
});