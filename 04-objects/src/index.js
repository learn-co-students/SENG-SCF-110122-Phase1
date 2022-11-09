// const newCustomer = [{"first-name": "Darian"}, {"last-name": "Fultz"}, {age: 22}]

// this is actually better
const newCustomer = { "first-name": "Darian", "last-name": "Fultz", age: 22 }

const lastName = "last-name"
console.log(newCustomer[lastName])
console.log(newCustomer.age)


// const customer = {
//   name: "Tiger Rose",
//   age: 5, 
//   address: {
//     house: 100,
//     street: "86th St",
//     city: "NYC",
//     state: "NY"
//   },
//   favoriteFood: ["Chewys", "Salmon Jerky", "other various treats"]
// }


// console.log(customer.favoriteFood[customer.favoriteFood.length - 1])

console.log(bookStore.inventory)
bookStore.location = "Tampa"
// bookStore["location"] = "Grenada"

bookStore.message = () => console.log("Thanks for being a frequent customer")

for(let key in bookStore) {
  console.log(bookStore[key])
}
// bookStore.inventory is an array so we can use our array method .map() on it!
const getTitles = bookStore.inventory.map(obj => obj.title)

// gives us an array of keys
const bookKeys = Object.keys(bookStore)

// gives us an array of values
const bookVals = Object.values(bookStore)

// gives us an array of arrays. Each subarray has two indices. 0 === the key, 1 === the value
const bookSubArrs = Object.entries(bookStore)

// spread operator works on objects AND arrays!
const bookStoreClone = {...bookStore, location: "Los Angeles"}


// closures => scope issue

const me = "Shelby"


function whatsMyName(me) {
 if(true) {
  console.log(me)
 }
}

whatsMyName("Holly")
