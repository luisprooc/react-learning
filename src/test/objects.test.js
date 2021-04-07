import { createStore } from "../utils/objects";


describe("Test a objectos", () => {

    test("Agregar un item", ()=> {
        const store = createStore();

        store.addItem({
            name: "Luis",
            id: 1,
            age: 18
        });

        expect(store.getStore()[0]).toEqual({
            name: "Luis",
            id: 1,
            age: 18
        });
    });

    test("Obtener un item por el id", ()=> {
        const store = createStore();

        store.addItem({
            name: "Luis",
            id: 1,
            age: 18
        });



        expect(store.getById(1)).toEqual({
            name: "Luis",
            id: 1,
            age: 18
        });
    });

    test("Verificar si una de las propiedades coincide", ()=> {
        const store = createStore();

        store.addItem({
            name: "Luis",
            id: 1,
            age: 18
        });



        expect(store.getById(1)).toMatchObject({
            name: "Luis",
        });
    });

    test("Verificar si contiene la propiedad name", ()=> {
        const store = createStore();

        store.addItem({
            name: "Luis",
            id: 1,
            age: 18
        });



        expect(store.getById(1)).toHaveProperty("name");
    });

});