// * ----------- Assignment from Thursday ----------- *

let book1 = "You don't know JS, yet: Get Started by Kyle Simpson"
let b1Price = 10

let book2 = "Eloquent JavaScript, 3rd Edition by Marijn Haverbeke"
let b2Price = 15

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

// let input = prompt("Please enter a book to search")


// 1. Store the books and customer names in arrays. 


// 2. Write a functions that can transform customers elements. 

// - Change books to uppercase
// - Remove the author
// - Remove the title


// 3. Write a function that will filter books out by a search term.


// 4. Write a function that returns a specific book by search term. 


