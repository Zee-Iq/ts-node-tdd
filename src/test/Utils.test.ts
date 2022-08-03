import { Utils } from "../app/Utils";


describe("Utils test suite", () => {

    // will run one time before anything else runs
    beforeAll(() => {
        console.log("beforeAll");

    })


    // will run before each test 
    beforeEach(() => {
        console.log("beforeEach");

    })

    test("first test", () => {
        const result = Utils.toUpperCase("abc")
        expect(result).toBe("ABC")
    })

    test("Parse a simple URL", () => {
        const parsedUrl = Utils.parseUrl("http://localhost:8080/login")
        expect(parsedUrl.href).toBe("http://localhost:8080/login")
        expect(parsedUrl.port).toBe("8080")
        expect(parsedUrl.protocol).toBe("http:")
        expect(parsedUrl.query).toEqual({})
    })

    test("Parse URL with query", () => {
        const parsedUrl = Utils.parseUrl("http://localhost:8080/login?user=user&password=pass")
        const expectedQuery = {
            user: "user",
            password: "pass"
        }
        expect(parsedUrl.query).toEqual(expectedQuery)
        expect(expectedQuery).toBe(expectedQuery)

    })
    // testing errors 
    test("testing invalid URL", () => {
        function expectError() {
            Utils.parseUrl("")
        }
        expect(expectError).toThrowError()
    })
    // testing errors with an arrow function
    test("testing invalid URL with arrow function", () => {
        expect(() => {
            Utils.parseUrl("")
        }).toThrow("Empty URL")
    })
    // testimg errors with a try catch block
    // testing if the instance of the class Errors is given
    
    test("testing invalid URL with a try catch block", () => {
        try {
            Utils.parseUrl("")
        } catch (error) {
            expect(error).toBeInstanceOf(Error)
            expect(error).toHaveProperty("message", "Empty URL!")
        }
    })
})