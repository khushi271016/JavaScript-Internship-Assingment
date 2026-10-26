// Assignment 5: Function Architecture and Scope

// Standard function with default parameter values
function rectangleArea(length = 5, width = 4) {
  return length * width;
}

// Arrow function with default parameter values
const rectangleAreaArrow = (length = 5, width = 4) => length * width;

console.log(`Standard Function Area (Default 5x4): ${rectangleArea()}`);
console.log(`Arrow Function Area (Custom 10x3): ${rectangleAreaArrow(10, 3)}`);

// Scope demonstration: block scope (let/const) vs function scope (var)
{
  let blockVar = "I only exist inside this block";
  var functionVar = "var ignores block scope";
}

try {
  console.log(blockVar); // blockVar is limited to the block above
} catch (error) {
  console.log(`Scope Test Error: ${error.name}: ${error.message}`);
}

// var leaks out of a block but not out of a function
console.log(`var outside block: ${functionVar}`);

function scopeDemo() {
  var insideFunction = "function scoped";
}
try {
  console.log(insideFunction);
} catch (error) {
  console.log(`Function Scope Error: ${error.name}: ${error.message}`);
}s