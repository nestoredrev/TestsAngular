import { obtenerHeroes } from "./arreglos";

describe('Prueba de arreglos', () => {
    
    it('Deberia de ser un arreglo', () => {
        const respuesta = obtenerHeroes();
        expect(typeof respuesta).toBe('object');
    });

    it('Debe de devolver al menos 3 heroes', () => {
        const respuesta = obtenerHeroes();
        expect(respuesta.length).toBeGreaterThanOrEqual(3);
    });

    it('Debe de existir Batman y Joker en el arreglo', () => {
        const respuesta = obtenerHeroes();
        expect(respuesta).toContain('Batman');
        expect(respuesta).toContain('Joker');
    });
});