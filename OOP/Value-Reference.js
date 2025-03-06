// Value types 
//-- 6 Primitives 

// Reference Types 
//Array
// Function
// Object

//Adding and Removing Properties 
function Circle (radius){
    this. radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}
const circle = new Circle (10);
circle.mocessss = {x:1};

// delete the Property 
delete circle.mocessss;



