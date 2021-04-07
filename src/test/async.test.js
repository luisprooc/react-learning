import {  getData,getDataPromise } from "../utils/async";

describe("Testeando operaciones asincronas", () => {

    test("Haciendo test a promesa con async", async() => {
        const arr = await getDataPromise();
        expect(arr).toEqual([1,2,3]);

    });

    test("Haciendo test a promesa reject", async() => {
        try{
            const res = await getDataPromise(true);
            expect(res).toBe("REJECTED");
        }
        catch(error){
            expect(error).toBe("REJECTED")
        }
    });
});