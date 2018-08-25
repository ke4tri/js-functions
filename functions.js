// input = animal ex. fish
// output = animal product ex. fish stix

function nuggetizer(animal) {
    return  `${animal} stix`;
}

const nuggetizer2 = (animal) => {
    return `${animal} jerky`
}

console.log('deer: ', nuggetizer2('deer'));

console.log('fish: ', nuggetizer('fish'));
console.log('cat: ', nuggetizer('cat'));
console.log('bear: ', nuggetizer('bear'));


//These both work below 
// function nomnom(name, item) {
//     return `${name} devoured ${item} `
// };

const nomnom = (name, item) => {
    return `${name} devoured ${item} `; 
}

const bearSticks = nuggetizer('bear');
console.log(nomnom('wayne', bearSticks)); // wayne devoured bear stix

// function numberAdder that takes in a number and
// return the number plus 3. so input=22, output == . 

// const numberAdder = (num) => {
//     return num + 3;
// };

const numberAdder = (num) => {
    const finalNumber = num + 3;
    printToDom(`<h2>${finalNumber}</h2>`, 'allTheNumbers');
};



// console.log(numberAdder(22));
// console.log('num: ', numberAdder(22));

const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};
numberAdder(22);
numberAdder(25);

printToDom("I am ready for lunch", "feelings")

