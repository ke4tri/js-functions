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

