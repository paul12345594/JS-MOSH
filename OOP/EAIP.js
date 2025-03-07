
// ES5 CONSTRUCTOR
    function Student (name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
// PROTOTYPE
    Student.prototype.getInfo = function () {
        return `${this.name} ${this.age} ${this.gender}`;
    }

    Student.prototype.getAge = function () {
        return `${this.name} ${this.age}`;
    }

    // INSERTING ANOTHER PARAMETER
    function Person  (name, age, gender, yearEnrolled){
        Student.call(this, name, age, gender)
        this.year = yearEnrolled;
        this.enrolled = true;
    }
    // TO put in the FAMILY STUDENT PROTOTYPE
    Person.prototype = Object.create(Student.prototype); 

    // TO Change the Function  / For EDiting
    Person.prototype.enroll = function (yearEnrolled){
        this.year = yearEnrolled;
        this.enrolled = true;   
    }
    const person = new Person ("darwin", 26, "male", "4th Year");
    person.enroll("2025");  // to EDIT 
    console.log(person.getAge()); 
