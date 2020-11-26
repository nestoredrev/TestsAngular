import { Jugador2 } from './jugador2';

describe('Jugador 2 emit', () => {
    
    let jugador2: Jugador2;

    beforeEach(() => {
        jugador2  = new Jugador2();
    });

    it('Debe de emitir un evento cuando recibe daño', () => {
        
        // Preparar
        let nuevoHP = 0;

        // Actuar
        // En el test se espera el subscribe para realizar la prueba
        jugador2.hpCambia.subscribe( hp => {
            nuevoHP = hp;
        });

        jugador2.recibeDanio(1000);

        // Verificar
        expect(nuevoHP).toBe(0);
    });

    it('Debe de emitir un evento cuando recibe daño y sobrevivir', () => {
        
        // Preparar
        let nuevoHP = 0;

        // Actuar
        // En el test se espera el subscribe para realizar la prueba
        jugador2.hpCambia.subscribe( hp => {
            nuevoHP = hp;
        });

        jugador2.recibeDanio(50);

        // Verificar
        expect(nuevoHP).toBe(50);
    });
});