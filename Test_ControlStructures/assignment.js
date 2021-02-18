const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
const anotherRandomNumber = Math.random();

const array = [1, 2, 3, 4, 5];

if (randomNumber > 0.7) {
  alert(randomNumber);
}

for (let i = 0; i < array.length; i++) {
  alert('First method: ' + array[i]);
}

for (const element of array) {
  alert('Second method: ' + element);
}

for(let i = array.length - 1; i >= 0; i--){
  alert(`From end: ${array[i]}`);
}

if(randomNumber > 0.7 && anotherRandomNumber > 0.7 || 
  (randomNumber < 0.2 || anotherRandomNumber < 0.2)) {
    alert('DONE!');
  }

