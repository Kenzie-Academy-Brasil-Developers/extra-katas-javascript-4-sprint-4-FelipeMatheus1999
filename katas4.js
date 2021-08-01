const gotCitiesCSV = "King's Landing, Braavos, Volantis, Old Valyria, Free Cities, Qarth, Meereen";

const lotrCitiesArray = ["Mordor", "Gondor","Rohan", "Beleriand", "Mirkwood", "Dead Marshes", "Rhun","Harad"];

const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit";

const results = document.querySelector('.results');

const header = (word) => {
    let header = document.createElement("span");
    header.classList.add('header')
    header.textContent = word;
    results.appendChild(header);
}

const showResults = (show) => {
    results.appendChild(show());
}

header('Kata I');

function kata1() {
    const span = document.createElement('span');
    span.textContent = JSON.stringify(gotCitiesCSV.split(' '));
    
    return span;
}

showResults(kata1);


header('Kata II');

function kata2() {
    const span = document.createElement('span');
    span.textContent = JSON.stringify(bestThing.split(' '));

    return span;
}

showResults(kata2);


header('Kata III');

function kata3() {
    const span = document.createElement('span');
    span.textContent = JSON.stringify(gotCitiesCSV.split(',').join(';'));

    return span;
}

showResults(kata3)


header('Kata IV');

function kata4() {
    const span = document.createElement('span');
    span.textContent = JSON.stringify(lotrCitiesArray.join(', '))

    return span;
}

showResults(kata4);


header('Kata V');

function kata5() {
    const span = document.createElement('span');
    span.textContent = JSON.stringify(lotrCitiesArray.slice(0, 5))

    return span;
}

showResults(kata5);


header('Kata VI');

function kata6() {
    const span = document.createElement('span');
    span.textContent = JSON.stringify(lotrCitiesArray.slice(3, -1))

    return span;
}

showResults(kata6);


header('Kata VII');

function kata7() {
    const span = document.createElement('span');
    span.textContent = JSON.stringify(lotrCitiesArray.slice(2, 5));

    return span;
}

showResults(kata7);


header('Kata VIII');

function kata8() {
    const span = document.createElement('span');
    lotrCitiesArray.splice(2, 1)
    span.textContent = JSON.stringify(lotrCitiesArray)

    return span;
}

showResults(kata8);


header('Kata IX');

function kata9() {
    const span = document.createElement('span');
    lotrCitiesArray.splice(5, 2)
    span.textContent = JSON.stringify(lotrCitiesArray)

    return span;
}

showResults(kata9);


header('Kata X');

function kata10() {
    const span = document.createElement('span');
    lotrCitiesArray.splice(2, 0, 'Rhun')
    span.textContent = JSON.stringify(lotrCitiesArray)

    return span;
}

showResults(kata10);


header('Kata XI');

function kata11() {
    const span = document.createElement('span');
    lotrCitiesArray.splice(5, 1, 'Deadets Marshes')
    span.textContent = JSON.stringify(lotrCitiesArray)

    return span;
}

showResults(kata11);


header('Kata XII');

function kata12() {
    const span = document.createElement('span');
    span.textContent = JSON.stringify(bestThing.slice(0, 12))

    return span;
}

showResults(kata12);


header('Kata XIII');

function kata13() {
    const span = document.createElement('span');
    span.textContent = JSON.stringify(bestThing.slice(-13, -1));

    return span;
}

showResults(kata13);


header('Kata XIV');

function kata14() {
    const span = document.createElement('span');
    span.textContent = JSON.stringify(bestThing.slice(23, 38));

    return span;
}

showResults(kata14);


header('Kata XV');

function kata15() {
    const span = document.createElement('span');
    span.textContent = JSON.stringify(bestThing.substring(68, 80));

    return span;
}

showResults(kata15);


header('Kata XVI');

function kata16() {
    const span = document.createElement('span');
    span.textContent = JSON.stringify(bestThing.substring(23, 38));

    return span;
}

showResults(kata16);


header('Kata XVII');

function kata17() {
    const span = document.createElement('span');
    lotrCitiesArray.pop('');
    span.textContent = JSON.stringify(lotrCitiesArray);

    return span;
}

showResults(kata17);


header('Kata XVIII');

function kata18() {
    const span = document.createElement('span');
    lotrCitiesArray.push('Deadets Marshes');
    span.textContent = JSON.stringify(lotrCitiesArray);

    return span;
}

showResults(kata18);


header('Kata XIX');

function kata19() {
    const span = document.createElement('span');
    lotrCitiesArray.shift();
    span.textContent = JSON.stringify(lotrCitiesArray);

    return span;
}

showResults(kata19);


header('Kata XX');

function kata20() {
    const span = document.createElement('span');
    lotrCitiesArray.unshift('Mordor');
    span.textContent = JSON.stringify(lotrCitiesArray);

    return span;
}

showResults(kata20);
// daqui em diante é contigo
