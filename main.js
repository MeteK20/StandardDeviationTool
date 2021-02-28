// importeer Statistics class
import {Statistics} from './Statistics.js';

// print de standaarddeviatie naar het scherm
function printStandardDeviation() {
    const stats = new Statistics();
    // haal het invoerveld op
    let inputField = document.getElementById('text-field');
    let values = '';
    /* zet de waarde van values op de input van de form
        gebruik value i.p.v. innerText wanneer het een input element betreft
    */
    values = inputField.value;
    // empty check
    if (values === null || values === '') {
        errorMsg(inputField, 'De invoer mag niet leeg zijn.');
        return;
    }
    // zet values om naar een array, bij elke komma in de string
    values = values.split(',');
    // verwijder spaties uit elke string van values en converteer ze naar getallen
    for(let i = 0; i < values.length; i++) {
        console.log(typeof values[i]);
        values[i] = values[i].trim();
        values[i] = parseInt(values[i]);
        console.log(typeof values[i]);
        // getal check -> TODO: wijzigen naar regex om hele invoer te checken
        if (!Number.isInteger(values[i])) {
            errorMsg(inputField, 'Voer alleen getallen in.');
            return;
        }
        
    }
    console.log(values);
    // bereken standaarddeviatie 
    let sd = stats.calcStandardDeviation(values);
    // print standaarddeviatie
    document.getElementById('output').innerHTML = sd;
}

// geef foutmelding
function errorMsg(element, message) {
    element.classList.add('border-danger', 'text-danger');
    element.value = message;
}

// invoer en foutmelding clear
function clearInAndOut() {
    let inputField = document.getElementById('text-field');
    if (inputField.classList.contains('border-danger', 'text-danger')) {
        inputField.classList.remove('border-danger', 'text-danger');
    }
    inputField.value = '';
    document.getElementById('output').innerHTML = '';
}  

/* event listeners zijn over het algemeen good practice dan wanneer je direct 
    in een html bestand events toevoegt */
document.getElementById('calculator-btn').addEventListener('click', printStandardDeviation);
document.getElementById('text-field').addEventListener('click', clearInAndOut);