import { incrementar } from "./numeros";

describe ('Prueba de numeros', () => {
    it('Deberia de devolver un numero', () => {
        
        const respuesta = incrementar(99);
        expect(typeof respuesta).toBe('number');
    })

    it('Debe de retornar 100, si el numero ingresado es mayor a 100', () => {
        
        const respuesta = incrementar(300);
        expect(respuesta).toBe(100);
    })

    it('Debe de retornar el numero + 1, si no es mayor a 100', () => {
        
        const respuesta = incrementar(50);
        expect(respuesta).toBe(51);
    })
})