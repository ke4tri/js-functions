const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};

let bandNumber = 1

<<<<<<< HEAD
    let band = bandNumber++ + '. ' + bandName + ' ';
    printToDom(band,'challenge');
    // const bandString = `<h3>${bandName}</h3>`;
    
}


const bandSTring = `<h3>${bandNumber}. ${bandName</h3>`;
bandNumber++;
printTo....

// console.log(takeNumber("Galactic Scum"));
=======
>>>>>>> ff26fe4f580a08e5d60f263621d1f75c25f42ff3

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

