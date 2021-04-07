import {  getData,getDataPromise } from "../utils/async";

describe("Testeando operaciones asincronas", () => {

    test("Haciendo test a promesa", () => {
        return expect(getDataPromise()).resolves.toEqual([1,2,3]);
    });

    test("Haciendo test a promesa reject", () => {
        return expect(getDataPromise(true)).rejects.toBe("REJECTED");
    });
});