// Assignment 1: Variables, Data Types, and Console Operations

var name = "Alice";                          // var: function-scoped, can be redeclared
let age = 25;                                // let: block-scoped, can be reassigned
let isEmployed = true;
const skills = ["HTML", "CSS", "JavaScript"]; // const: cannot be reassigned

console.log(`Name: ${name} (Type: ${typeof name})`);
console.log(`Age: ${age} (Type: ${typeof age})`);
console.log(`Is Employed: ${isEmployed} (Type: ${typeof isEmployed})`);
console.log(`Skills: ${JSON.stringify(skills).replace(/,/g, ", ")} (Type: ${typeof skills})`);