import { test, describe, expect } from "@jest/globals";
import getRandomElement from "../../scripts/helpers/getRandomElement";

describe("getRandomElement", () => {
    test("Проверка соответствия возвращаемой длины", () => {
        const randomElement = getRandomElement([1, 2, 3]);
        expect(randomElement).toBeTruthy();
    });
});
