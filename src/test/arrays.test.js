import { createStore } from "../utils/arrays";

describe("Haciendo pruebas a listas", () => {
    test("probando agregar una nueva fruta", () => {
        const store = createStore();

        store.addFruit("fresa");

        expect(store.getFruits()).toStrictEqual(["fresa"]); 
    });

    test("probando agregar varias frutas", () => {
        const store = createStore();

        store.addFruit("fresa"),
        store.addFruit("pera")

        expect(store.getFruits()).toContain("pera"); 
    });

    test("Verificando la longitud", () => {
        const store = createStore();

        store.addFruit("fresa");
        store.addFruit("pera");

        expect(store.getFruits()).toHaveLength(2); 
    });

    test("Probar agregar un objeto", () => {
        const store = createStore();

        store.addFruit({
            name: "fruta",
            price: 10
        });

        expect(store.getFruits()).toContainEqual({name: "fruta", price: 10}); 
    });

});