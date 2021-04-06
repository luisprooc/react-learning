import { saludo, getId } from "../utils/strings";

describe("Pruebas de strings", () => {

    const saludar = saludo("LUIS");
    const id  = getId();

    test("Probando la funcion Saluda", () => {
        expect( saludar ).toMatch("Hello");
    });

    test("Probando la funcion id", () => {
        expect( id ).toMatch(/\d{2}-\d{2}/);
    });
})