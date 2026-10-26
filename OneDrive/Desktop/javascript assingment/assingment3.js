// Assignment 3: Conditional Logic Implementation

const score = 85;
let grade;

// if...else: validate the score and decide the grade band
let band;
if (score < 0 || score > 100) {
  band = -1;
} else if (score >= 90) {
  band = 9;
} else if (score >= 80) {
  band = 8;
} else if (score >= 70) {
  band = 7;
} else if (score >= 60) {
  band = 6;
} else {
  band = 0;
}

// switch: map the band to a letter grade
switch (band) {
  case 9:
    grade = "A";
    break;
  case 8:
    grade = "B";
    break;
  case 7:
    grade = "C";
    break;
  case 6:
    grade = "D";
    break;
  case 0:
    grade = "F";
    break;
  default:
    grade = "Invalid";
}

// ternary: pass or fail (pass mark is 40)
const status = score >= 40 ? "Passed" : "Failed";

console.log(`Score: ${score}`);
console.log(`Grade: ${grade}`);
console.log(`Status: ${status}`);