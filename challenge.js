const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};

let bandNumber = 1
// below is the "takeNumber function and you call it with tackNumber("bandName")"
const takeNumber = function (bandName) {

    let band = bandNumber++ + '. ' + bandName + ' ';
    printToDom(band,'challenge');
    // const bandString = `<h3>${bandName}</h3>`;
    
}

// console.log(takeNumber("Galactic Scum"));


takeNumber("Galactic Scum") // This should display "1. Galactic Scum" in the DOM
takeNumber("Underdogs") // This should display "2. Underdogs" in the DOM

//////////////////////////////////////////

// print band name
// deal with counter

