// this is an example of pure function
function pureExample(x) {
  return 2 * x * x;
}

pureExample(2); // 8
pureExample(2); // still 8

let temp = 5;

// this is an example of impure function
function impureExample(x) {
  temp += 5;
  return x * temp;
}

console.log(impureExample(2)); // 20
console.log(impureExample(2)); // 30 -> different!

let immutable = { x: 5, y: 3 };
const immutableCopy = immutable; // This is a reference!
console.log(immutable === immutableCopy); // true

immutable = { x: 6, ...immutable };
console.log(immutable === immutableCopy); // false
