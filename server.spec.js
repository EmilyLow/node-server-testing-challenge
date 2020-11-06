const supertest = require("supertest");
const server = require("./server");
const db = require("./database/config")

beforeEach(async () => {
    await db.seed.run()
})

afterAll(async () => {
	
	await db.destroy()
})

describe("data tests", () => {
    it("creates a new testdata", async () => {
        const res = await supertest(server)
            .post("/test")
            .send({"name": "autotest1"})
        expect(res.statusCode).toBe(201)
        expect(res.type).toBe("application/json")

    })
    it("deletes testdata", async() => {
        const res = await supertest(server)
            .del("/test/1")
        expect(res.statusCode).toBe(201)
        console.log("res.text", res.text);
        //!! Why doesn't this work?
        // expect(res.text).toBe("removed")
        // console.log("!!!delete res", res);
       
    })
})