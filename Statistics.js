// Statistics class en export
export class Statistics {

    // bereken de standaard deviatie
    calcStandardDeviation(arr) {
        // stap 1: bereken het gemiddelde
        let n = this.calcN(arr);
        let mean = this.calcMean(arr, n);

        // stap 2: trek het gemiddelde van elke waarde af
        let sumOfPowers = this.calcSumOfPowers(arr, mean);

        // stap 3: deel de som door het aantal waardes
        let variance = this.calcVariance(sumOfPowers, n);

        // stap 4: neem de wortel van elke waarde
        let standardDeviation = Math.sqrt(variance);
        return standardDeviation;
    }

    // bereken het aantal waardes
    calcN(arr) {
        let n = 0;
        for(let i = 0; i < arr.length; i++) {
            n++;
        }
        return n;
    }

    // bereken het gemiddelde
    calcMean(arr, n) {
        let sum = 0;
        for(let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        let mean = sum / n;
        return mean;
    }

    // bereken de som van machten
    calcSumOfPowers(arr, mean) {
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

    // bereken de variantie
    calcVariance(sumOfPowers, n) {
        let variance = sumOfPowers / n;
        return variance;
    }

};







