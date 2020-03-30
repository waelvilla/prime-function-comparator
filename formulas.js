/*
Resources: 
https://en.wikipedia.org/wiki/Formula_for_primes
https://math.stackexchange.com/questions/264544/how-to-find-number-of-prime-numbers-up-to-to-n
https://www.jstor.org/stable/2975080?read-now=1&seq=14#metadata_info_tab_contents
https://mathworld.wolfram.com/Prime-GeneratingPolynomial.html

*/


//Formulas to be tested
const formulas = [
    {
        name: "Prime Polynomial Function ESCOTT in 1899",
        formula: (n) => Math.pow(n, 2) - 79 * n + 1601
    },
    {
        name: "6n - 1 Formula",
        formula: (n) => Math.abs(6 * n - 1)
    },
    {
        name: "F. Gobbo (pers. comm., Dec. 27, 2005)",
        formula: (n) => 8 * Math.pow(n, 2) - 488 * n + 7243
    },
    {
        name: "Gauss",
        formula: (n) => 2 * Math.pow(n, 2) + 2 * n + 19
    },
    {
        name: "R. Frame (pers. comm., Dec. 30, 2018)",
        formula: (n) => 3 * Math.pow(n, 2) + 3 * n + 23
    },
    {
        name: "Euller 1772",
        formula: (x) => (Math.pow(x, 2) + x + 41)
    },
    {
        name: "Gauss",
        formula: (n) => {
            return 6 * Math.pow(n, 2) + 6 * n + 31;
        },
    },
    {
        name: "Wheel Theory Our Derivative",
        formula: (x) => {
            //first 25 primes
            let knownPrimes = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 97,];
            let result = [];
            for (i in knownPrimes) {
                let temp = knownPrimes[i] + x;
                if (isPrime(temp)) {
                    result.push(temp)
                }
            }
            return result;

        }
    },
    {
        name: "Wilson's theorem",
        formula: (n) =>{
            let nominator = factorial(n) % (n + 1)
            let flooredFraction = Math.floor(nominator / n)
            let result = flooredFraction * (n - 1) + 2;
            if (nominator == n) {
                return n + 1;
            }
            return result;
        }
    }

]



var f = [];

//implementation of the factorial n! = n * (n-1) * (n-2) *.... * 1
function factorial(n) {
    if (n == 0 || n == 1)
        return 1;
    if (f[n] > 0)
        return f[n];
    return f[n] = factorial(n - 1) * n;
}


// checks if a number is prime by its factors from 2 to the square root of the number
function isPrime(number) {
    if (number == 2 || number == 1) { return true };
    let maxDivisor = Math.ceil(Math.sqrt(number))
    for (var i = 2; i <= maxDivisor; i++) {
        if (number % i == 0) {
            return false
        }
    }
    return true
}

/*parameters: 
    name: name of the formula
    formula: equation to be implemented
    max: number of iterations to check for primes
*/
function runFormula({ name, formula, max }) {
    let startTime = new Date()
    var primeNumbers = new Set();
    let failedIndices = [];
    let passedIndices = []; //
    let firstBreak;

    for (var i = 0; i < max; i++) {
        let number = formula(i)
        if (number == false) { failedIndices.push(i); continue }
        if (number && isPrime(number)) {
            passedIndices.push(i);
            name.includes("Wheel") ? primeNumbers.add(...number) :
                primeNumbers.add(number);

        } else {
            //if it is the first time it breaks, assign it to the variable
            firstBreak ? null : firstBreak = i;
            failedIndices.push(i);
        }
    }
    let endTime = new Date()
    let timeElapsed = (endTime - startTime) / 1000
    return {
        primeNumbers: [...primeNumbers],
        failedIndices,
        firstBreak,
        timeElapsed
    }

    //To test it in console uncomment the follolwing code block:
    /*    
    console.log(`${name}:
        - resulting primes count: ${primeNumbers.size}
        - failures count: ${failedIndices.length} 
        - the formula was consistent until : ${firstBreak}
        - time Elapsed: ${timeElapsed}
        `);
    console.log(primeNumbers);
    */
}



// To test all formulas at once in the console, uncomment this:

/*formulas.map(({ name, formula }) => {
    let startTime = new Date()
    var primeNumbers = new Set();
    let failedIndices = [];
    let passedIndices = []; //
    let firstBreak;

    for (var i = 0; i < 10000; i++) {
        let number = formula(i)
        if (number == false) { failedIndices.push(i); continue }
        if (number && isPrime(number)) {
            passedIndices.push(i);
            name.includes("Wheel") ? primeNumbers.add(...number) :
                primeNumbers.add(number);

        } else {
            firstBreak ? null : firstBreak = i;
            failedIndices.push(i);
        }
    }
    let endTime = new Date()
    let timeElapsed = (endTime - startTime) / 1000
    console.log(`${name}:
        - resulting primes count: ${primeNumbers.size}
        - failures count: ${failedIndices.length} 
        - the formula was consistent until : ${firstBreak}
        - time Elapsed: ${timeElapsed}
        `);

    console.log(primeNumbers);
})
*/