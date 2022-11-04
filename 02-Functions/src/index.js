//1. Create a constant variable called bookstore with the value 'Easley\'s Technical Books' (or "Easley's Technical Books")
const bookstore = "Easley's Technical Books";

//2. Create a variable that can be reassigned called open with the value false
let open = false;

// console.log(open)

//3. Create a conditional message based on the value of open. If open is true log "Welcome to {bookstore}, we're open" else "Sorry, {bookstore} is closed"
if (open === true) {
  console.log(`Welcome to ${bookstore}, we're open`);
} else {
  console.log(`Sorry, ${bookstore} is closed.`);
}

//4. Create a function that toggles the value of open between T and F.
function toggleOpen() {
  return (open = !open);
}

// function is like a manual or a list of instructions => a reusable block of code => written together in order to perform a specific task
const name = "Shelby";

// hoisting => accessing the value of a variable or function before it has been declared

// this is an example of hoisting, which works for function declarations but not for function expressions or arrow functions
console.log(upper());

function upper() {
  return name.toUpperCase();
}

let book1 = "You don't know js, yet:Get Started by Kyle Simpson";
let b1Price = 10;

let book2 = "Eloquent JavaScript, 3rd Edition by Marijn Haverbeke";
let b2Price = 15;

//* ------ Function Declaration ------ *

function printBook(book, price) {
  return `Book Name: ${book}; Book Price: ${price}`;
}

printBook(book2, b2Price);
console.log(printBook(book1, b1Price));

//* ------ Function Expression ------ *

// const hi = function () {
//   return "Hi I hope you're having a great day!"
// }

//* ------ Arrow function ------ *

const hi = () => {
  return "Hi I hope you're having a great day!";
};

// arrow functions allow us to remove curly braces and our return is implicit (aka no return keyword)
const addTax = bookPrice => bookPrice * 1.07;

addTax(b2Price);

//* ------ callback functions ------ *

// function that is passed as an argument to a parent function
function newFunc(cb, param) {
  return cb(param);
}

// in arrow functions:
// 1 parameter.... parens are optional
const toUpper = (string) => string.toUpperCase();
const toLower = (string) => string.toLowerCase();

// 0 OR more than 1 parameter.... parens are required
const doingMath = () => "maths is hard";
const doingLotsaMath = (num1, num2, num3) => num1 + num2 + num3;


//* ------ Assignment ------ *
// 1. Create function called greetUser that takes 2 parameters, a name and a book. 
// 2. Function should return a string that greets the user by name and tells them if their book is in stock. Use the book variables declared above as our bookstore's list of in-stock books.
// 3. Extra credit: consider if the user enters a book that is all in lower case or is incomplete aka "javascript" or "You don't know js"
// 4. Extra extra credit: create a "guard clause" that will return a message if the user fails to include a second argument

function greetUser(name, book) {
  book = book.toLowerCase()
  if (book === undefined) {
    return `Hi ${name}, please enter the name of the book that you are looking for`;
  }
  else if (book1.toLowerCase().includes(book) || book2.toLowerCase().includes(book)) {
    return `Hi ${name}, you're in luck! ${book} is in stock.`;
  } else {
    return `Hi ${name} your book is not in stock. Please search for another title.`
  }
}
