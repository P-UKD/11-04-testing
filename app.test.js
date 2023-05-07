const { combineAndRemoveZ, checkLoginAndPassword } = require("./app");

describe("combineAndRemoveZ", () => {
    test("combines and removes z from array of strings", () => {
        const arr = ["hello", "world", "zoo"];
        const result = combineAndRemoveZ(arr);
        expect(result).toBe("helloworldoo");
    });

    test("returns empty string when array is empty", () => {
        const arr = [];
        const result = combineAndRemoveZ(arr);
        expect(result).toBe("");
    });

    test("removes z from a single string in the array", () => {
        const arr = ["zoo"];
        const result = combineAndRemoveZ(arr);
        expect(result).toBe("oo");
    });
});

describe("checkLoginAndPassword", () => {
    test("returns secret phrase when login and password are correct", () => {
        const login = "user1";
        const password = "pass1";
        const result = checkLoginAndPassword(login, password);
        expect(result).toBe("secret1");
    });

    test("returns null when login is incorrect", () => {
        const login = "nonexistentuser";
        const password = "pass1";
        const result = checkLoginAndPassword(login, password);
        expect(result).toBeNull();
    });

    test("returns null when password is incorrect", () => {
        const login = "user1";
        const password = "wrongpassword";
        const result = checkLoginAndPassword(login, password);
        expect(result).toBeNull();
    });
});