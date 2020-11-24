import { mensaje } from "./string";

describe( 'Pruebas de strings', () => {

    it( 'Debe de regresar un string', () => {

        const respuesta = mensaje('Nestor');
        expect( typeof respuesta ).toBe('string');
    })

    it( 'Debe de retornar un saludo con el nombre enviado', () => {

        const nombre = 'Nestor';
        const respuesta = mensaje(nombre);
        expect( respuesta ).toContain(nombre);
    })

})