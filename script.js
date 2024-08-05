// Create a sample object, then write a JavaScript function that deletes the property of an object passed to it.

// I started by creating my object and pass along the following properties
const person = {  
    firstName: "Edward",
    lastName: "Omopariola Jr",
    age: 25,
    complextion: "Dark"
}

function deleteProperty(property) { //I define my function and pass in PROPERTY in the parameter
    // Using the delete property, I added the object follow by the property i want to remove
    delete person.age;
    //I used my return method to bring back the rest of the object once the function above as been perform
    return person;
}
console.log(deleteProperty(person));