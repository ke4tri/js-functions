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

