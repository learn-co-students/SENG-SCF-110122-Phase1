# Objects
## SWBAT
- Implement (or create) objects 
- Access object properties and nested properties  
- Modify object Properties 
- Iterate through objects using for...in
- Implement Object.keys, Object.values and Object.entries 
- Use the spread operator to make a shallow copy of an object

## Object
Object is a data type that's used to store other data. (Fun fact: Arrays are a type of object.) A typical Object has key-value pairs. Much like an Array has indexes that contain values, Objects have keys (also known as properties) that hold value. 

```
//Creating objects
//Objects can start as an empty pair of {} or with default data
const obj = {username: 'tiger rose', faveFood:{food:'salmon', serving: 100}}

//New properties can be added using dot notation or bracket notation 
obj.favToys = ['tennis ball', 'dog friends']
obj['age'] = 5

//Bracket notation allows variables to be passed in for keys
let owner = 'owner'
obj[owner] // the owner property in this case would be 'owner'. we will see this bracket notation more when we start iterating over data
obj[owner] = 'shelbs'

// {username: 'tiger rose', faveFood:{food:'salmon', serving: 100}, faveToys:['tennis ball', 'dog friends'], age:5}

//Accessing properties 
//Properties can be access through dot or bracket notation
obj.username //tiger rose
obj['owner'] // or obj[owner] => shelbs

//Accessing nested properties
obj.favToys[1] // 'dog friends'
obj.favFood.food // 'salmon'

//Updating properties 
obj.age = 6

//Delete object property  
delete obj.age 

```


