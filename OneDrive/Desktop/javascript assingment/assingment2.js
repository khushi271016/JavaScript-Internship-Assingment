// Assignment 2: Operators, Expressions, and Input Handling
// Run in a browser (prompt() is a browser function). When run in Node.js,
// it falls back to the sample values 100 and 15 so the output can be tested.

const ask = (message, fallback) =>
  typeof prompt === "function" ? prompt(message) : String(fallback);

// prompt() returns a string, so convert explicitly with Number()
const subtotal = Number(ask("Enter the bill amount:", 100));
const tipPercentage = Number(ask("Enter the tip percentage:", 15));

if (isNaN(subtotal) || isNaN(tipPercentage)) {
  console.log("Please enter valid numbers.");
} else {
  let tip = (subtotal * tipPercentage) / 100; // arithmetic operators
  let total = subtotal;
  total += tip;                               // assignment operator

  console.log(`Subtotal: $${subtotal}`);
  console.log(`Tip Percentage: ${tipPercentage}%`);
  console.log(`Calculated Tip: $${tip}`);
  console.log(`Total Amount to Pay: $${total}`);
}