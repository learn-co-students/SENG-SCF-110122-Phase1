const URL = 'http://localhost:3000'

function fetchFactory(url) {
  return fetch(url).then(response => response.json())
  // reminder: return value of response.json() is implicit because of one line arrow function
}


function getBooks() {
  fetchFactory(`${URL}/books`)
  .then(returnedData => returnedData.forEach(function(bookObj) {
    renderOneBook(bookObj) // in this case we don't necessarily need a return value. if we were using getBooks() elsewhere and needed a return value we would return... something.
  }))
}

getBooks()

function getStore(num) {
  fetchFactory(`${URL}/stores/${num}`)
  
  .then(returnedData => {
    renderHeader(returnedData) // reminder that if we returned this function, the function on line 16 wouldn't run. try it!
    renderFooter(returnedData)
  })
}

getStore(1) // dynamically rendering store by id

//Build header => create a function will be invoked inside of fetch
// create function, parameter
function renderHeader(store){
  document.querySelector("h1").textContent = store.name;
}

//Build footer => create a function that will be invoked inside of fetch
function renderFooter(store){
  document.querySelector("footer div").textContent = store.name;
  document.getElementById("address").textContent = store.address;
  document.querySelectorAll("footer div")[2].textContent = store.hours;
}

//Clear book list
document.querySelector("#book-list li").remove();
//render one book
const renderOneBook = (book) => {
  const li = document.createElement("li");
  const h3 = document.createElement("h3");
  const pAuthor = document.createElement("p");
  const pPrice = document.createElement("p");
  const img = document.createElement("img");
  const btn = document.createElement("button");

  h3.textContent = book.title;
  pAuthor.textContent = `Author: ${book.author}`;
  pPrice.textContent = `$${book.price}`;
  btn.textContent = "Delete";

  img.src = book.imageUrl;
  li.className = "list-li";

  //Event Listeners => delete button
  btn.addEventListener("click", () => li.remove());

  li.append(h3, pAuthor, pPrice, img, btn);
  document.querySelector("#book-list").append(li);
};

document.querySelector("#book-form").addEventListener("submit", (e) => {
  //prevents the form from refreshing the browser
  e.preventDefault();

  //event-param.what-the-event-listener-is-called-on.attribute-like-name-or-id.value
  const book = {
    title: e.target.title.value,
    author: e.target.author.value,
    price: e.target.price.value,
    imageUrl: e.target.imageUrl.value,
    inventory: e.target.inventory.value,
    reviews: [],
  };
  renderOneBook(book);
});
