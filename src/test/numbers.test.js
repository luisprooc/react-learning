import { sum, rest , mult,getRandomNum } from "../utils/numbers";

describe("Prueba funciones matematicas", () => {
    test("Prueba la suma", () => {
        expect( sum(5,5) ).toBe(10);
    });

    test("Prueba la resta", () => {
        expect( rest(10,5) ).toBe(5);
    });

    test("Prueba la multiplicacion", () => {
        expect( mult(2,2) ).toBe(4);        
    });

    test("Prueba a la funcion random", () => {
        expect( getRandomNum(5,10) ).toBeGreaterThanOrEqual(5);        
    });
});