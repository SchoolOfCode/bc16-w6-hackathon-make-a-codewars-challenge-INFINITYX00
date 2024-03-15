// Import 'test' and 'expect' functions from vitest.
import { test, expect } from "vitest";

// Import the 'coatOrNoCoat' function from main.js
import coatOrNoCoat from "main.js";

//Test Case: Temperature less than or equal to 20
// Inside the test call the coatOrNoCoat function with an argument of 15.
// Assert that the value returned is "it's cold out you should wear a coat"

// test("Temperature less than or equal to 20", () => {
//   expect(coatOrNoCoat(15)).toBe("it's cold out you should wear a coat");
// });

// Test Case: Temperature greater than 20
// Inside the test call the coatOrNoCoat function with an argument of 25.
// Assert that the value returned is "it's warm out, you don't need a coat"

test("Temperature more than 20", () => {
  expect(coatOrNoCoat(25)).toBe("it's warm out, you don't need a coat");
});

// Test Case: Zero temperature
// Inside the test call the coatOrNoCoat function with an argument of 0.
// Assert that the value returned is "it's cold out you should wear a coat"

// test("Temperature zero", () => {
//   expect(coatOrNoCoat(0)).toBe("it's cold out you should wear a coat");
// });

// Test Case: Negative temperature
// Inside the test call the coatOrNoCoat function with an argument of -5.
// Assert that the value returned is "it's cold out you should wear a coat"

// test("Temperature negative", () => {
//   expect(coatOrNoCoat(-5)).toBe("it's cold out you should wear a coat");
// });

// Test Case: Large temperature
// Inside the test call the coatOrNoCoat function with an argument of 100.
// Assert that the value returned is "it's warm out, you don't need a coat"

// test("Temperature large value", () => {
//   expect(coatOrNoCoat(100)).toBe("it's warm out, you don't need a coat");
// });

// Test Case: Decimal temperature (rounded down)
// Inside the test call the coatOrNoCoat function with an argument of 25.9.
// Assert that the value returned is "it's cold out, you should wear a coat"

// test("Decimal temperature (rounded down)", () => {
//   expect(coatOrNoCoat(20.9)).toBe("it's cold out, you should wear a coat");
// });

// Test Case: Decimal temperature (rounded up)
// Inside the test call the coatOrNoCoat function with an argument of 21.1.
// Assert that the value returned is "it's warm out, you don't need a coat"

// test("Decimal temperature (rounded up)", () => {
//   expect(coatOrNoCoat(21.1)).toBe("it's warm out, you don't need a coat");
// });

// Test Case: Non-numeric input
// Input: "twenty"
// Expected Output: Error or appropriate handling mechanism (e.g., return undefined)

// Test Case: Missing input
// Input: (no input provided)
// Expected Output: Error or appropriate handling mechanism (e.g., return undefined)

// Test Case: Extremely high temperature
// Input: 10000
// Expected Output: "it's warm out, you don't need a coat"
