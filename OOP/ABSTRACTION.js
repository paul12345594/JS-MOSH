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
// const Person = new Haircut ("Darwin", "palworx", "christian");
// console.log(Person)

// INHERITANCE 
function Student (barbers, faded, mullet, Tomahawk){
    Haircut.call (this, barbers, faded, mullet)
    this.newCut = Tomahawk;
}
// to change the  function 
Student.prototype.allreadyCut = function (Tomahawk){
    this.new = Tomahawk;
    this.Cutallready = true;
}

const student = new Student ("darwin", "paul", "angel Cyril", "christian");
//console.log(student);

student.allreadyCut("pushback")
console.log(student);