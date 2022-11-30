//1. POST: On submit, data should be sent to our server and create a new resource.
//2. When the resource is returned from the server, it should be rendered to the client.
//3. PATCH: Add an inventory number input to a book card. On change the inventory number should update on the server.
//4. DELETE: On Click of the delete button the book should be removed from the server.

//Build header
const renderHeader = (bookStore) => {
  document.querySelector("h1").textContent = bookStore.name;
};

//Build footer
const renderFooter = (bookStore) => {
  document.querySelector("footer div").textContent = bookStore.name;
  document.getElementById("address").textContent = bookStore.address;
  document.querySelectorAll("footer div")[2].textContent = bookStore.hours;
};
//Clear book list
document.querySelector("#book-list li").remove();
//render one book
const renderOneBook = (book) => {
  const li = document.createElement("li");
  const h3 = document.createElement("h3");
  const pAuthor = document.createElement("p");
  const pPrice = document.createElement("p");
  const img = document.createElement("img");
  const inventory = document.createElement("input")
  const btn = document.createElement("button");

  inventory.type = "number"
  inventory.value = book.inventory
  h3.textContent = book.title;
  pAuthor.textContent = `Author: ${book.author}`;
  pPrice.textContent = `$${book.price}`;
  btn.textContent = "Delete";

  img.src = book.imageUrl;
  li.className = "list-li";

  //Event Listener delete book. I need book id for fetch
  btn.addEventListener("click", () => deleteBook(book.id));

  // Event Listener update book inventory. Again, I need book id for fetch
  inventory.addEventListener('change', (e) => updateBook(book.id, e))

  li.append(h3, pAuthor, pPrice, img, inventory, btn);
  document.querySelector("#book-list").append(li);
};

document.querySelector("#book-form").addEventListener("submit", (e) => {
  //prevents the form from refreshing the browser
  e.preventDefault();

  //event-param.what-the-event-listener-is-called-on.attribute-like-name-or-id.value
  // TODO: dynamically create our book, with getElementsByTagName
  const book = {
    title: e.target.title.value,
    author: e.target.author.value,
    price: e.target.price.value,
    imageUrl: e.target.imageUrl.value,
    inventory: e.target.inventory.value,
    reviews: [],
  };
  // renderOneBook(book)
  createOneBook(book);
});

//READ: GET - 1
const getStore = (id) => {
  fetch(`http://localhost:3000/stores/${id}`)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data)
      renderHeader(data);
      renderFooter(data);
    })
    .catch((e) => console.log(e));
};
//READ: GET - all
const getBooks = () => {
  fetch("http://localhost:3000/books")
    .then((res) => res.json())
    .then((inventory) => {
      // console.log(inventory)
      inventory.forEach(renderOneBook);
    })
    .catch((e) => console.log(e));
};

//CREATE: POST
function createOneBook(book) {
  fetch("http://localhost:3000/books", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(book),
  })
    .then((r) => r.json())
    .then((returnedBook) => renderOneBook(returnedBook));
}

//DELETE: DELETE
function deleteBook(id) {
  fetch(`http://localhost:3000/books/${id}`, {
    method: "DELETE"
  });
}

//UPDATE: PATCH
function updateBook(id, e) {
    console.log(id, e.target.value)
    fetch(`http://localhost:3000/books/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({inventory: e.target.value})
    })
    .then(r => r.json())
    .then(data => console.log(data))
}

getBooks();
getStore(1);
