// * ----------- Assignment from Thursday ----------- *

let book1 = "You don't know JS, yet: Get Started by Kyle Simpson"
let b1Price = 10

let book2 = "Eloquent JavaScript, 3rd Edition by Marijn Haverbeke"
let b2Price = 15

function greetUser(name, book) {
  book = book.toLowerCase()
  if (book === undefined) {
    return `Hi ${name}, please enter the name of the book that you are looking for`;
  } else if (book1.toLowerCase().includes(book)) {
    return `Hi ${name}, you're in luck! ${book1} is in stock.`;
  } else if(book2.toLowerCase().includes(book)) {
    return `Hi ${name}, you're in luck! ${book2} is in stock.`;
  } else {
    return `Hi ${name} your book is not in stock. Please search for another title.`
  }
}

// let myName = prompt("Hi what is your name?")
// let input = prompt("What book are you searching for today?")

// we can input this search() function into our dev tools after the prompts have finished:
// const search = () => greetUser(myName, input)

// ******************************************************* 

const students = ["Brandon", "Holly", "Angela", "Darian"]

students.push("Jennifer")
students.pop()

students.unshift("Jennifer")
students.shift()

const studentsCopy = students.slice()
// students.splice(3, 0, "Jennifer")

// spread operator. makes a copy. we can add additional elements and avoid nested arrays
const newNew = [...students, "Shelby"]



// .slice() vs .splice()

// slice is nondestructive
// .slice() with no args makes a full copy of the array
// .slice(1,4) makes a new copy of the array => first arg is where we start, second argument is the index after our end. so our new array starts at index 1 and ends at index 3

// splice is destructive
// .splice(1,0,"Julie") first arg is where we begin, second arg is the number of elements to delete and third optional argument is what we'd insert. So in this case at index 1 we would insert "Julie" but we wouldn't delete anything. Our array would look like ["Brandon", "Julie", "Holly", "Angela", "Darian"]. if we wanted to replace Holly with Julie then our method would look like this: .splice(1,1,"Julie")


// 1. Store the books and customer names in arrays. 

const books = [
  'JavaScript: The Definitive Guide by David Flanagan', 
  'JavaScript: The Good Parts by Douglas Crockford',  
  'JavaScript & JQuery: Interactive Front-End Web Development by Jon Duckett', 
  'Eloquent JavaScript: A Modern Introduction to Programming by Marjin Haverbeke', 
  'Learn Enough JavaScript to Be Dangerous by Michael Hartl',
  'Cracking the Coding Interview by Gayle Laakmann McDowell' 
];

// movie star customers 
const customers =  ['Thomas Haden Church', 'John Leguizamo', 'Jason Segel', 'Kevin Hart', 'Henry Golding', 'Mindy Kaling', 'Octavia Spencer', 'Rashida Jones', 'Zooey Deschanel', 'Allison Janney'];

// for loop
// for(let i = 0; i < customers.length; i++) {
//   console.log(customers[i])
// }

// for in loop, mostly used for objects but can be used for arrays in some cases where the data is simple. will work just fine for strings. i is the index that will start at 0 and increment as we loop thru
// for(const i in books) {
//   console.log(books[i])
// }

// for of loop, used for arrays. item is the variable that becomes each book in our books array, as we loop thru
// for(const item of books) {
//   console.log(item)
// }

// forEach as function and again as arrow function
// books.forEach(function(book) {return console.log(book)})
// customers.forEach((item) => console.log(item))

// .map returns an array. ** forEach return value will always be undefined
// NOTE: this is written as a variable and not a function
const upcaseCustomers = customers.map((person) => person.toUpperCase())

// this is written as a function
const upcaseCustomers2 = () => customers.map((person) => person.toUpperCase())


// 2. Write functions that can transform books elements. 
// - Change books to uppercase (in this case we've written a reusable function that can also return customers to uppercase)
function toUp(array) {
  return array.map(function(element){return element.toUpperCase()})
}


// - Remove the author
// function, iterate over books, just show the title, return a new array

// .split(" by ") so this:
'JavaScript: The Definitive Guide by David Flanagan'
// becomes this:
['JavaScript: The Definitive Guide', 'David Flanagan']

// will not require an argument when invoked because the function will look for books in the global scope
const noAuthor = () => books.map(book => book.split(" by ")[0])

// requires an argument when invoked, booksArr here is a locally scoped parameter
// ******** hoisted function with callback broken out into its own separate function ********
const noAuthor2 = (booksArr) => booksArr.map(noAuthorBook)

function noAuthorBook(author) {
  return author.split(" by ")[0]
}

// same functionality but using for of loop
function noAuthorAgain(booksArry) {
  const result = []
  for(const book of booksArry) {
    result.push(book.split(" by ")[0])
  }
  return result
}


// - Remove the title
const noTitle = () => books.map(book => book.split(" by ")[1])

// - Remove the customer's last name
const firstNames = () => customers.map(person => person.split(" ")[0])



// 3. Write a function that will filter books out by a search term.
// .filter() returns an array

// ************** There are multiple ways to do this. You do not have to use prompt(), you can pass a search parameter if you'd prefer. Also you don't have to break out separate callback function but I did, so I could re-use it for deliverables 3 and 4 **************

const input = prompt("Please enter a book to search").toLowerCase()

const findBooks = () => books.filter(checkForMatch)

// 4. Write a function that returns a specific book by search term. 
// .find() returns the first match (NOT an array)

const findOneBook = () => books.find(checkForMatch)

const checkForMatch = (el) => el.toLowerCase().includes(input)

