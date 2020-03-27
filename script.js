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
        formula: (n) => Math.pow(n, 2) + n + 41
    },
    {
        name: "f2",
        formula: (n)=>Math.floor(Math.pow(1, 3 * n))
        // formula: (n) => Math.floor(Math.pow(1.3063778838630806904686144926, 3 * n))
    },
    {
        name: "f3",
        formula: (n) => 6*n+1
    },
    {
        name: "f4",
        formula: (n) => 6*n -1
    },
    {
        name: "f5",
        formula: (n) => {}
    },
    {
        name: "f6",
        formula: (n) => {}
    },
    {
        name: "f7",
        formula: (n) => {}
    }
]

// checks if a number is prime by its factors from 2 to the square root of the number
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

formulas.map(({name,formula}) => {
    let startTime = new Date()
    let primeNumbers = []
    for (var i = 0; i < 1000; i++) {
        let number = formula(i)
        if (number && isPrime(number)) {
            primeNumbers.push(number)
        }
        else{
            break;
        }
    }
    let endTime = new Date()
    let timeElapsed = (endTime - startTime) / 1000
        console.log(`${name}:
        - prime count: ${primeNumbers.length}
        - time Elapsed: ${timeElapsed}
        `);
        
    // console.log("formula: ", name, "took", timeElapsed, "seconds and breaks at", primeNumbers.length,"th number" );
})

