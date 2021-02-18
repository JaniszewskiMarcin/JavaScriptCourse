/* function sayHello(name) {
  console.log('Hi ' + name);
}

sayHello(); */

const sayHello = (name = 'Maximus') => console.log(`Hi ${name}`);

sayHello('Robert');
sayHello();

const sayHelloTwo = (text, name) => console.log(`${text} ${name}`);

sayHelloTwo('Hello', 'Adam');

const sayHelloThree = () => {
  const name = 'Faji';
  const text = 'Hi ';

  return text + name;
}

console.log(sayHelloThree());


const checkInput = (cb, ...unlimited) => {
let haveEmptyStrings = false;

    for(const str of unlimited)
    {
      if(!str) {
        haveEmptyStrings = true;
        break;
      }
    }

    if(!haveEmptyStrings){
      cb();
    }
}

checkInput( () => {console.log(`All not empty!`);}, 'Im', 'AA', 'AA');