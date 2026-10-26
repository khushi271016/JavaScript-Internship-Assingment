// Assignment 4: Loop Control Structures

// 1. for loop: multiplication table of 5
console.log("-- Multiplication Table of 5 --");
for (let i = 1; i <= 5; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

// 2. while loop with break: first number > 10 divisible by 6
console.log("\n-- First number > 10 divisible by 6 --");
let n = 11;
while (true) {
  if (n % 6 === 0) {
    console.log(`Found: ${n}`);
    break;
  }
  n++;
}

// 3. do...while loop with continue: skip multiples of 3 (extra demo)
console.log("\n-- do...while with continue (skipping multiples of 3) --");
let k = 0;
do {
  k++;
  if (k % 3 === 0) {
    continue; // skip this number
  }
  console.log(k);
} while (k < 10);