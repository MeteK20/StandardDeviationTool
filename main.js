// importeer Statistics class, bij de path moet je met './' beginnen als je in dezelfde map zit 
import {Statistics} from './Statistics.js';

const stats = new Statistics();

// print de standaarddeviatie naar het scherm
function printStandardDeviation() {
    // haal het formulier op
    let form = document.getElementById('calculatorForm');
    let values = '';
    // zet de waarde van values op de input van de form
    values = form.elements[0].value;
    // zet values om naar een array, bij elke komma in de string
    values = values.split(',');
    // verwijder spaties uit elke string van values
    for(let i = 0; i < values.length; i++) {
        console.log(typeof values[i]);
        values[i] = values[i].trim();
        values[i] = Number(values[i]);
        console.log(typeof values[i]);
    }
    console.log(values);
    // bereken standaarddeviatie 
    let sd = stats.calcStandardDeviation(values);
    // print standaarddeviatie
    document.getElementById('output').innerHTML = 'De standaarddeviatie is: ' + sd;
    // wis de ingevulde gegevens
    form.elements[0].value = '';
};

const calcButton = document.getElementById('calculatorButton');
// wanneer er op de knop wordt geklikt, voer de functie uit
calcButton.addEventListener('click', printStandardDeviation);