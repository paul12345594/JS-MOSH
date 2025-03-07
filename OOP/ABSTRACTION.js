// Private Properties and Methods
// scope temporary 
//closure is stay where it is 

// function Circle(radius) {
//     this.radius = radius;   

//     this.defaultLocation = { x: 0, y: 0 };

//     let computeOptimumLocation = function (factor) { // Private function
//         console.log('Computing optimum location with factor', factor);
//     };

//     this.draw = function () {
//         computeOptimumLocation(0.1); // ✅ Corrected: No `this.` needed
//         console.log(this.defaultLocation); // ✅ Correctly accessing public property
//         console.log('draw');
//     };
// }
// const circle = new Circle(10);
// circle.draw(); // ✅ Correct call

// PROTOTYPE 
function Haircut (barbers, faded, mullet){
    this.barbers = barbers;
    this.faded = faded;
    this.mullet = mullet;
}

Haircut.prototype.getInfo = function() {
    return `for ${this.barbers} and for ${this.faded} ${this.mullet}`
}
const Person = new Haircut ("Darwin", "palworx", "christian");
console.log(Person)