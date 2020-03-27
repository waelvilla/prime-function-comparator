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
        name: "Prime Polynomial Function",
        formula: (n) => Math.pow(n, 2) - 79 * n + 1601
    },
    {
        name: "Cullen",
        formula: (n) => {}
            // formula: (n) => Math.floor(Math.pow(1.3063778838630806904686144926, 3 * n))
    },
    {
        name: "6n - 1 Formula",
        formula: (n) => 6 * n - 1
    },
    {
        name: "Carol Formula",
        formula: (n) => {}
    },
    {
        name: "f5",
        formula: (n) => Math.floor(n % 4)
    },
    {
        name: "3n + 2",
        formula: (n) => (3 * n + 2)
    },
    {
        name: "f7",
        formula: (n) => {}
    }
]

// checks if a number is prime by its factors from 2 to the square root of the number
// VERIFIED
function isPrime(number) {
    let maxDivisor = Math.ceil(Math.sqrt(number))
    for (var i = 2; i <= maxDivisor; i++) {
        if (number % i == 0) {
            return false
        }
    }
    return true
}

// Gets first X number of prime numbers starting from 1 
let getFirstXPrimes = (count) => {
    let primeNumbers = []
    for (var i = 1; i < count; i++) {
        if (isPrime(i)) {
            primeNumbers.push(i)
        }
    }
    return primeNumbers
}

const FIRST_TEN_THOUSAND_PRIMES = getFirstXPrimes(10000);

formulas.map(({ name, formula }) => {
    let startTime = new Date()
    let primeNumbers = [];
    let failedIndices = [];
    let passedIndices = []; //
    let firstBreak;

    for (var i = 0; i < 100; i++) {
        let number = formula(i)
        if (number && isPrime(number)) {
            passedIndices.push(i);
            primeNumbers.push(number)
        } else {
            firstBreak ? null : firstBreak = i;
            failedIndices.push(i);
        }
    }
    let endTime = new Date()
    let timeElapsed = (endTime - startTime) / 1000
    console.log(`${name}:
        - resulting primes count: ${primeNumbers.length}
        - failures count: ${failedIndices.length} 
        - the formula was consistent until : ${firstBreak}
        - time Elapsed: ${timeElapsed}
        `);

    // console.log("formula: ", name, "took", timeElapsed, "seconds and breaks at", primeNumbers.length,"th number" );
})