const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};

let bandNumber = 1

let takeNumber = function (bandName) {
    const bandString = `<h3>${bandNumber}. ${bandName}</h3>`;
    bandNumber++;
    printToDom(bandString, 'challenge');
}

takeNumber("Galactic Scum") // This should display "1. Galactic Scum" in the DOM
takeNumber("Underdogs") // This should display "2. Underdogs" in the DOM

//////////////////////////////////////////

// print band name
// deal with counter

