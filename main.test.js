import { test, expect } from "vitest";
import coatOrNoCoat from "main.js";

//Test Case: Temperature less than or equal to 20
// Input: 15
// Expected Output: "it's cold out you should wear a coat"

// Test Case: Temperature greater than 20

// Input: 25
// Expected Output: "it's warm out, you don't need a coat"

// Test Case: Zero temperature
// Input: 0
// Expected Output: "it's cold out you should wear a coat"

// Test Case: Negative temperature
// Input: -5
// Expected Output: "it's cold out you should wear a coat"

// Test Case: Large temperature value
// Input: 100
// Expected Output: "it's warm out, you don't need a coat"

// Test Case: Decimal temperature (rounded down)
// Input: 20.9
// Expected Output: "it's cold out you should wear a coat"

// Test Case: Decimal temperature (rounded up)
// Input: 21.1
// Expected Output: "it's warm out, you don't need a coat"

// Test Case: Non-numeric input
// Input: "twenty"
// Expected Output: Error or appropriate handling mechanism (e.g., return undefined)

// Test Case: Missing input
// Input: (no input provided)
// Expected Output: Error or appropriate handling mechanism (e.g., return undefined)

// Test Case: Extremely high temperature
// Input: 10000
// Expected Output: "it's warm out, you don't need a coat"
