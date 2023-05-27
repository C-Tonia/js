let result = Math.pow(8, 3);
console.log(result);

// solving the quadratic equation
const quadratic = function ({ c, a, b }) {
  if (c === " " || b === " " || a === " ") return;
  let x1 = (-b + Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);
  let x2 = (-b - Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);

  return `x will be ${x1.toFixed(3)} or ${x2.toFixed(3)}`;
};
console.log(quadratic({ a: 3, b: -5, c: -7 }));

// Reversing a word and returning it as an upper case
const reverseWord = function (value) {
  if (value === " ") return;
  let reverseString = value.split("").reverse().join("");
  return reverseString.toUpperCase();
};
console.log(reverseWord("frontend"));

// Displaying the days of the week
const displayDay = function () {
  const day = new Date();

  let today = new Intl.DateTimeFormat("default", {
    weekday: "long",
  }).format(day);

  switch (today) {
    case "Monday":
      return "Monday";
      break;
    case "Tuesday":
      return "Tuesday";
      break;
    case "Wednesday":
      return "Wednesday";
      break;
    case "Thursday":
      return "Thursday";
      break;
    case "Friday":
      return "Friday";
      break;
    case "Saturday":
      return "Saturday";
      break;
    case "Sunday":
      return "Sunday";
      break;
    default:
      return "Can't be able to display the day";
  }
};
console.log(displayDay());

// a function that returns a name
const displayName = function (name) {
  console.log(`Hello ${name}`);
};
displayName("Tonia");

// a function that displays product of two numbers
const product = function (num1, num2) {
  return num1 * num2;
};
console.log(product(3, 4));

// function showing working with arrays
const arr = function (fruit) {
  // to add a value at beginning of an array unshift() method is used
  const fruits = ["banana", "pineapple", "mango", "orange"];
  console.log(`initial array: ${fruits}`);
  fruits.unshift(fruit);
  console.log(`array when a value was added: ${fruits}`);
  fruits.pop();
  console.log(`array when a value was removed: ${fruits}`);
};

arr("apple");
