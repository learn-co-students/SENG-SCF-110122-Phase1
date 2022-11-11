// i like to organize my code this way, you can feel free to order your code as you like! (so long as you don't try to access a variable before initialization, of course!)
const discardCard = document.querySelector("ul li");
const bookStoreName = document.querySelector("h1");
const bookStoreAddress = document.querySelectorAll("h2")[1];
const hours = document.createElement("h3");

discardCard.remove();
bookStoreName.textContent = bookStore.name;
bookStoreAddress.textContent = bookStore.address;

// ******* .textContent vs innerText vs innerHTML *******

//best practice, this is the most efficient
hours.textContent = bookStore.hours;
document.querySelector("div header div").append(hours);

// this is fine
// hours.innerText = "something"

// please do not use - there are security issues with using .innerHTML
// hours.innerHTML = "something"

// https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML#security_considerations

// **************

// append vs appendChild:
// append is more flexible, you can append strings and/or multiple things
// appendChild will only allow you to append a Node, aka an HTML element. And only one Node per append()

// const bestBook = "Eloquent JavaScript"
// bookStoreName.append(bestBook, bestBook, bestBook)

// NOTE / reminder: .forEach, filter, map, find etc are all for Arrays - NOT for Objects


const renderBooks = () => {
  bookStore.inventory.forEach((bookObj) => {
    const li = document.createElement("li");
    const title = document.createElement("h3");
    const author = document.createElement("p");
    const price = document.createElement("p");
    const img = document.createElement("img");

    title.textContent = bookObj.title;
    author.textContent = `By: ${bookObj.author}`;
    price.textContent = `$${bookObj.price}`;
    img.src = bookObj.imageUrl;

    li.className = "list-li";
    li.append(author, title, img, price);

    document.querySelector("#book-list").appendChild(li);
  });
};

// I decided to place our .forEach into a function and invoke it, to remove the variables from the global scope. Our function doesn't need a return value because we are just putting stuff on the DOM!
renderBooks()
