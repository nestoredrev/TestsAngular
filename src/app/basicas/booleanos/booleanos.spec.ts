import { usuarioLogeado } from "./booleanos";

describe('Prueba de booleanos', () => {
    it('Deberia de devolver un boolean', () => {
        
        const respuesta = usuarioLogeado(false);
        expect(typeof respuesta).toBe('boolean');
    })

    it('Debe de retornar TRUE', () => {
        
        const respuesta = usuarioLogeado(true);
        expect(respuesta).toBeTruthy();
    })

    it('Debe de retornar FALSE', () => {
        
        const respuesta = usuarioLogeado(false);
        expect(respuesta).toBeFalsy();
    })
})