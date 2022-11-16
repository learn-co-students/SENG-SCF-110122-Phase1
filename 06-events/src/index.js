//Build header
document.querySelector("h1").textContent = bookStore.name;

// TODO Review
// Render name, address and store hours to footer
document.querySelector("footer div").textContent = bookStore.name;

document.querySelector("div #address").textContent = bookStore.address;

// lastElement won't work but lastElementChild will work
// document.querySelector('footer').lastElementChild.textContent = bookStore.hours

document.querySelectorAll("footer div")[2].textContent = bookStore.hours;

// appends or prepends INSIDE the parent element
// document.querySelector('footer').prepend("hello world")
// document.querySelector('footer').append("hello world")

//Clear content from the DOM

// TODO 1. Remove a book from the DOM with a click event
// 1a. first let's remove our generic book
document.querySelectorAll("#book-list li")[0].remove();
// OR
// document.querySelector('ul li').remove()

//Build book list
const renderBooks = () =>
  bookStore.inventory.forEach((bookObj) => {
    // iterating thru our inventory and adding a new book for each bookObj in our bookStore
    renderOneBook(bookObj);
  });

renderBooks();

// Adding Content with a form
//TODO 2. Use a submit event to get data from a form and add it to the DOM
const form = document.getElementById("book-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const newBook = {
    title: e.target.title.value,
    author: e.target.author.value,
    price: e.target.price.value,
    inventory: e.target.inventory.value,
    imageUrl: e.target.imageUrl.value,
    reviews: [],
  };
  // adding new book to our book list
  renderOneBook(newBook);

  e.target.title.value = "";
  e.target.author.value = "";
  // continue assigning input element values to an empty string to clear out our inputs
  // this assures our user that their button click "worked"
});

// here we have broken out our render book functionality so it can be re-used!
function renderOneBook(bookObj) {
  const li = document.createElement("li");
  const title = document.createElement("h3");
  const author = document.createElement("p");
  const price = document.createElement("p");
  const img = document.createElement("img");

  // 1b. add a 'Delete' button to each card (this will need an event listener attached)
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  deleteBtn.addEventListener("click", () => li.remove());

  title.textContent = bookObj.title;
  author.textContent = `Author: ${bookObj.author}`;
  price.textContent = `$${bookObj.price}`;
  img.src = bookObj.imageUrl;
  img.alt = bookObj.name;

  // Question: when should we add a class and when should we add an id??
  li.className = "list-li";
  li.append(author, title, img, price, deleteBtn);

  document.querySelector("#book-list").appendChild(li);
}
