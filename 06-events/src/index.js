//Build header
document.querySelector('h1').textContent = bookStore.name

// TODO Review
// Render name, address and store hours to footer

//Clear content from the DOM

// TODO 1. Remove a book from the DOM with a click event
// 1a. first let's remove our generic book

//Build book list
const renderBooks = () => {
    bookStore.inventory.forEach((bookObj) => {
      const li = document.createElement("li");
      const title = document.createElement("h3");
      const author = document.createElement("p");
      const price = document.createElement("p");
      const img = document.createElement("img");

      // 1b. add a 'Delete' button to each card (this will need an event listener attached)
  
      title.textContent = bookObj.title;
      author.textContent = `Author: ${bookObj.author}`;
      price.textContent = `$${bookObj.price}`;
      img.src = bookObj.imageUrl;
  
      // Question: when should we add a class and when should we add an id??
      li.className = "list-li";
      li.append(author, title, img, price);
  
      document.querySelector("#book-list").appendChild(li);
    });
  };
  
  // I've placed our .forEach into a function and invoke it, to remove the variables from the global scope. Our function doesn't need a return value because we are just putting stuff on the DOM!
  renderBooks()

  // Adding Content with a form
//TODO 2. Use a submit event to get data from a form and add it to the DOM
