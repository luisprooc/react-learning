const getValue = (exp) => {
    switch(exp) {

        case "definido":
            return {};

        case "indefinido":
            return undefined;

        case "verdadero":
            return true;

        case "false":
            return false;

        default:
            return null;
    }
}

describe("Testear valores null, undefinded y boleanos", () => {

    test("Validar si existe un valor", () => {
        expect(getValue("definido")).toBeDefined();

    });

    test("Validar si es null", () => {
        expect(getValue()).toBeNull();

    });

    test("Validar si es verdadero", () => {
        expect(getValue("verdadero")).toBeTruthy();

    });

    test("Validar si es NaN", () => {
        expect(getValue()).toBeNaN();

    });

});