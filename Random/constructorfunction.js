// FACTORY FUNCTION
// function createCharacteristics(shy, brave, clumsy) {
//     return {
//         shy: shy,
//         brave: brave,
//         clumsy: clumsy,
//         draw: function() {
//             console.log('Welcome to the Mobile Legends');
//         },
//         ward() {
//            return `PIGO PARTYYYYYY`
//         }
//     };
// }

// const another = createCharacteristics(3, 12, 22); // No 'new' keyword needed
// const person = createCharacteristics("paul", "darwin", "christian")

// console.log(another); // Logs the entire object
// console.log(another.shy);  // Logs 3
// console.log(another.brave); // Logs 12
// console.log(another.clumsy); // Logs 22

// console.log(person); // Logs the entire object
// console.log(person.shy);  // Logs paul
// console.log(person.brave); // Logs darwin
// console.log(person.clumsy); // Logs christian

// console.log(another.ward()) // if Using a return  
// another.draw();



        // CONSTRUCTOR FUNCTION 
// function Person (firstname, lastname){
//     console.log('this', this);
//     this.firstname = firstname,
//     this.lastname = lastname,

//     this.Characteristics = () => {
//         return `${this.firstname} ${this.lastname}`;
//     }
// }
//  const Human = new Person ('Paul Allen', 'Dungca');
//   console.log(Human);    

//  const People = new  Person("Darwin", "De luna");
//   console.log(People)
 
//  console.log(Human.Characteristics());
//  console.log(People.Characteristics());
 