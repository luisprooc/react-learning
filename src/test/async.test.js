import {  getData,getDataPromise,getDataUser } from "../utils/async";

describe("Testeando operaciones asincronas", () => {

    test("Haciendo test a promesa real", async() => {
        const user = await getDataUser();
        expect(user).toHaveProperty("username");

    });
});