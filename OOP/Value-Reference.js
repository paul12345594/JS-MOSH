// Value types 
//-- 6 Primitives 

// Reference Types 
//Array
// Function
// Object

//Adding and Removing Properties 
//  


// Enumerating Properties
function Circle (radius){                   // PROCESS
    this. radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}
const circle = new Circle (10);

for (let key in circle) {                   // to enumerate all members and an object use FOR loop 
    if (typeof circle[key] !== 'function')
    console.log(key, circle[key])
}

const keys = Object.keys(circle);           // to get all OBJECT keys 
console.log(keys);

if ('radius' in circle)                     // check for exixtence of property or method in object use IN OPERATOR
    console.log('circle has a radius')










