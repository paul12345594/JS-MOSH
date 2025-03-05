// FUNCTION FACTORY

function personFactory (name) {
    return{
        talk(){
            return `Hello I am ${name}`
        }
    }
}

const me = personFactory ('paulworz');
console.log(me.talk());

const ben  = personFactory(' darwin');
console.log(ben.talk()); 


//OTHER EXAMPLE FOR HTML - FACTORY FUNCTION
function createElement (type, text, color){
    const el = document.createElement(type)
    el.innerText = text
    el.style.color = color
    document.body.append(el)
    return {
        el,
        setText(text) {
            el.innerText = text
        },
        setColor(color) {
            el.style.color = color
        }
    }
}
const h1 = createElement ('h1', 'GOODS SHIT MGA BOSSING', 'red');
console.log(h1);

h1.setText('GOOOODS BYE FUCKING WORLD');