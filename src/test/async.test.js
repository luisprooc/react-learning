import {  getData } from "../utils/async";

describe("Testeando operaciones asincronas", () => {

    test("Haciendo test a callback", (done) => {
        getData((name) => {
            expect(name).toBe("LUISPROOC");

            done();
        })
    });
});