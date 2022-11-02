// * ------------ debugging tools ------------ *
// comments 

/* 
or multi-line comments 
*/

// console.log("hi")

let sum = 5 + 5

// console.log(sum)

// debugger

// * ------------ 7 Primitive Datatypes ------------ *

// string
// number
// boolean
// undefined // "🤷🏻‍♀️" 
// null // absense of value
// BigInt
// Symbols

// NOTE: the string inside the console.log() below is called a label
// typeof is a helpful keyword to determine data type

// console.log("the data type of 5.5 is: ", typeof 5.5)

// we write strings three ways, good to be consistent in our code. 
// but also best practice is to only use `` backticks when string interpolating
"5"
'5'
let five = "5"
// console.log(`my favorite number is ${five}`)

// boolean
true 
false

"true" // good, guys! this is not a boolean, this is a string

// !! double bang operator we can use to determine boolean value of an element
// ! bang operator tells us the opposite boolean value aka !true would evaluate to false


// number can only max out to the value of Number.MAX_VALUE. numbers beyond that should be initialized as bigInt
// we won't use bigInt in this program
// console.log(Number.MAX_VALUE+ 1) number will not increment

// symbols must be unique and are generally used with objects
// we won't use symbols in this program

// primitive data types are immutable and cannot change => unless we reassign the value using assignment operator
// let hi = "Hello"
// console.log(hi.toUpperCase())
// console.log(hi)

// * ------------ 7 Primitive Datatypes ------------ *

// let, const (and var)

// let hi;
// if we initialize a variable without assigning a value this value will default to undefined
// we can reassign the value of let as many times as we want/need to
// hi = "Hello"
// hi = "Hi There"

// const must be assigned a value upon initialization and that value cannot be changed
const myName = "Shelby";
// reassigning a constant variable's value will throw an error
// myName = "Michelle"

// we should not use var, this helps us prevent bugs. let and const are more strict and therefore recommended
// console.log(myHouse)
var myHouse = "apartment"


// * ------------ Conditionals and Scope ------------ *

// variables in each scope do not know of each other. Like separate Marvel Universes

let hungry = "meh"

// strict equality vs loose equality === / ==
// console.log(5 === "5")

// this is GLOBAL scope. available to entire document plus any other .js documents used by this application
const food = "hamburger"

// variables inside of conditionals (with our without curly braces) are BLOCK scope
if(hungry === "YES") console.log(food)
else if(hungry === "meh") {
  // we normally cannot re-initialize variables but because of the separate scope we can do this here
  const food = "small snack"
  console.log(food)
} else console.log("drink some water")


// variables inside a function are FUNCTION or LOCAL scope
function makeDinner() {
const food = "pizza"
  console.log("i'm in local scope")
}

// ternary - 3 parts
true ? console.log("do this") : console.log("do this other thing")
false ? console.log("do this") : console.log("do this other thing")

// "logical and"
true && console.log("this will run")