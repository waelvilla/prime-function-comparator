/*
Resources: 
https://en.wikipedia.org/wiki/Formula_for_primes
https://math.stackexchange.com/questions/264544/how-to-find-number-of-prime-numbers-up-to-to-n

Formulas: 
1- https://wikimedia.org/api/rest_v1/media/math/render/svg/91340957e8616e6cdb438a0bede7e4ba804e4922


*/

console.log(math.factorial(12));


//Formulas to be tested
const formulas = [{
        name: "Prime Polynomial Function ESCOTT in 1899",
        formula: (n) => Math.pow(n, 2) - 79 * n + 1601
    },
    {
        name: "High Jack",
        formula: (x) => {
            let n = (x - 19.5)
                // 4x^2 - (8n+154)x + 4n^2 +154n + 1523
            let result = 4 * Math.pow(x, 2) - (8 * n + 154) * x + 4 * Math.pow(n, 2) + 154 * n + 1523
            return Math.abs(result)
        }

        //(4 * Math.pow(n, 2) - (8 * n + 154) * n + 4 * Math.pow(n, 2) + 154 * n + 1523)
        // formula: (n) => Math.floor(Math.pow(1.3063778838630806904686144926, 3 * n))
    },
    {
        name: "6n - 1 Formula",
        formula: (n) => 6 * n - 1
    },
    {
        name: "High Bill",
        formula: (n) => {
            let firstExp = (2 * n + 1) / (math.factorial(2 * n) + 1)
            let secondExp = Math.floor((math.factorial(2 * n) + 1) / (2 * n + 1))
            let flooredExp = Math.floor(firstExp * secondExp)
            let result = 2 * Math.pow(((2 * n + 1) / 2), flooredExp)

            return result
        }
    },
    {
        name: "Polynomial by Miot 1912",
        formula: (n) => (Math.pow(n, 2) - 2999 * n + 2248541)
    },
    {
        name: "Euller 1772",
        formula: (x) => (Math.pow(x, 2) + x + 41)
    },
    {
        //Gold
        name: "f7",
        formula: (x) => {
            let n = x - 13
                //9x^2 - (18n + 231)x + 9n^2 + 231n + 1523
            let result = (9 * Math.pow(x, 2)) - ((18 * n + 231) * x) + (9 * Math.pow(n, 2) + 231 * n) + 1523
            return Math.abs(result)
        }
    },
    {
        name: "Wheel Theory Our Derivative",
        formula: function func(x) {
            let knownPrimes = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 97, ];
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
        name: "Wright 1951",
        formula: function func(n) {
            return Math.floor(2 * 1.92878 * n)
        }
    },

    {
        name: "Wilson's theorem",
        formula: function func(n) {
            let nominator = factorial(n) % (n + 1)
            if (nominator != n) { return false; }
            let flooredFraction = Math.floor(nominator / n)
            let result = flooredFraction * (n - 1) + 2;
            return result;
        }
    },

    {
        name: "Lazy",
        formula: (x) => {
            return isPrime(x) ? x : false;
        }
    },



]



var f = [];

function factorial(n) {
    if (n == 0 || n == 1)
        return 1;
    if (f[n] > 0)
        return f[n];
    return f[n] = factorial(n - 1) * n;
}


// checks if a number is prime by its factors from 2 to the square root of the number
// VERIFIED
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

// Gets first X number of prime numbers starting from 1 

formulas.map(({ name, formula }) => {
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

    // console.log("formula: ", name, "took", timeElapsed, "seconds and breaks at", primeNumbers.length,"th number" );
})