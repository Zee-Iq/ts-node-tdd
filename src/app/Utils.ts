import { Utils } from "../test/Utils.test"



describe("Utils test suite", () => {

    test("first test", () => {
        const result = Utils.toUpperCase("abc")
        expect(result).toBe("ABC")
    })
})