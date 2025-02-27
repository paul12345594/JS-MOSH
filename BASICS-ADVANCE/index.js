// CLASS FUNCTION 
// class Person {
//     constructor (firstName, lastName, bt){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.bt = bt;
//     }
//     getFullName(){
//         return `${this.firstName} ${this.lastName} `;
//     }
// }
// const human = new Person ("Paulworx", "Dungca", "A");
// console.log(human.getFullName());  // String result

// console.log(human); // Object result 
//---------------------------------------------------------------------------------------------------------------------------------------------------

// CONSTRUCTOR FUNCTION of ES26
// function Person (firstName, lastName, bt) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.bt = bt;

//     this.getFullName = () => {
//         return `${this.firstName} ${this.lastName} `; 
//     }
// } 
// const human = new Person ("Paulworx", "Dungca", "A");
// console.log(human.getFullName());  // String
 
//  console.log(human); // Object

//-----------------------------------------------------------------------------------------------
 
//  function Haircut (barbers, faded, mullet) {
//     this.barbers = barbers;
//     this.faded = faded;
//     this.mullet = mullet;

//     this.head = () => {
//         return `${this.barbers} ${this.faded} ${this.mullet}`;
//     }
//  }

// let male = new Haircut ("darwin", "paul", "christian");
// console.log(male.head())

// console.log(male);


class Haircut {
    constructor(barbers, faded, mullet){
        this.barbers = barbers;
        this.faded = faded;
        this.mullet = mullet;
    }

    getClient(){
        console.log(this.barbers);
        console.log(this.faded);
        console.log(this.mullet)
    }
}
let person = new Haircut ("darwin", "ako", "sila");
console.log (person.getClient());
console.log(person)


















