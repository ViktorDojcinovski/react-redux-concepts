// copy by value and copy by reference

// a is variable
// let's assume that a is complex structure
// a.reference = "#00111100111"

// b = a;
// b.ref = a.ref;

// let a = 6;

// let b = 6;

// b = 7;

// console.log(a);

// let n = [5, 6];
// let m = n;

// console.log(m);

// m[0] = 6;

// console.log(n); // --> { a: "6" }

// console.log(m);

// "==" "==="

// let a = {
//   n: 1,
// };

// let b = a;

c = 2.5;

let c;

let a = 3.14 - Number(c);

console.log(a);
console.log(typeof a);

let b = "55" - 0;

f();

function f() {}

// one time
setTimeout(() => {
  console.log(b);
}, 2000);

// repeating
setInterval(() => {
  console.log(b);
}, 2000);

fetch("url").then((res) => {
  console.log(res);
});

addEventListener("click", () => {
  console.log("");
});

console.log(b);
console.log(typeof b);

// console.log(a == b); // --> "==="
// console.log(a === b);

// "==" "===" primitives

5 == "5"; // --> true
5 === "5"; // --> false
