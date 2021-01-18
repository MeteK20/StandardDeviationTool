function printSD() {
    // form
    let form = document.getElementById('calculatorForm');
    let values = "";
    // zet de waarde van values op de input van de form
    values += form.elements[0].value;
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
    sd = returnSD(values);
    document.getElementById('output').innerHTML = "De standaarddeviatie is: " + sd;
}

function returnSD(arr) {
    // stap 1: bereken het gemiddelde
    let n = returnN(arr);
    let mean = returnMean(arr, n);

    // stap 2: trek het gemiddelde van elke waarde af
    let sumOfPowers = returnSumOfPowers(arr, mean);

    // stap 3: deel de som door het aantal waardes
    let variance = returnVariance(sumOfPowers, n);

    // stap 4: neem de wortel van elke waarde
    let standardDeviation = Math.sqrt(variance);
    return standardDeviation;
} 

function returnN(arr) {
    let n = 0;
    for(let i = 0; i < arr.length; i++) {
        n++;
    }
    return n;
}

function returnMean(arr, n) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let mean = sum / n;
    return mean;
}

function returnSumOfPowers(arr, mean) {
    let sumOfPowers = 0;
    for(let i = 0; i < arr.length; i++) {
        let tempValue = 0;
        tempValue = arr[i] - mean;
        // stap 2.1: de macht 2 van elke waarde
        tempValue = Math.pow(tempValue, 2);
        // stap 2.2: tel elke waarde op
        sumOfPowers += tempValue;
    }
    return sumOfPowers;
}

function returnVariance(sumOfPowers, n) {
    let variance = sumOfPowers / n;
    return variance;
}

