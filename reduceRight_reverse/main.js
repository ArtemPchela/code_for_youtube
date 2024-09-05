const originalString = document.querySelector(".original_string");
const rev = document.querySelector(".reverse");
const red = document.querySelector(".reduceRight");
const string = "Hello, World!";

let reversedStringReverse = string.split("").reverse().join("");
let reversedStringReduceRight = string
  .split("")
  .reduceRight((acc, char) => acc + char);

originalString.innerText = string;
rev.innerText = reversedStringReverse;
red.innerText = reversedStringReduceRight;
