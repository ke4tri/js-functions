
//new to ES6
const bananaDiv = document.getElementById("banana");
bananaDiv.innerHTML = 'im a banana';

let counter = 0;
counter = counter + 1;
counter += 1;
counter++;

//counter = 3
console.log('counter: ' ,counter);
//add a string to help finding what counter to use
//goood to use let becuase a counter changes

const greetingElement = document.getElementById('greeting');
const firstName = 'Terry';
const lastName = 'Collier';

//greetingElement.innerHTML = 'Hello my name is ' + firstName + '' + lastName;
greetingElement.innerHTML = `Hello my name is Wayne`;
greetingElement.innerHTML = `Hello my name is ${firstName} ${lastName}`;

//This isn't working below//
//object shorthand notation
let name = 'callan';
let age = '100000000000';

// let person = {
//     name: name,
//     age: age
// };
let person = {name, age};
console.log('person :', person.name);

////////////////
//Functions




