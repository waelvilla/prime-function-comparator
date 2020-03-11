/*
Resources: 
https://en.wikipedia.org/wiki/Formula_for_primes


Formulas: 
1- https://wikimedia.org/api/rest_v1/media/math/render/svg/91340957e8616e6cdb438a0bede7e4ba804e4922


*/

const formulas = [
    {
        name: "Prime Polynomial Function",
        formula: (n) => Math.pow(n, 2) + n + 41
    },
    {
        name: "f2",
        formula: (n) => { }
    },
    {
        name: "f3",
        formula: (n) => { }
    },
    {
        name: "f4",
        formula: (n) => { }
    },
    {
        name: "f5",
        formula: (n) => { }
    },
    {
        name: "f6",
        formula: (n) => { }
    },
    {
        name: "f7",
        formula: (n) => { }
    }
]

function isPrime(number) {
    let maxDivisor = Math.ceil(Math.sqrt(number))
    for (var i = 2; i <= maxDivisor; i++) {
        if (number % i == 0) {
            return false
        }
    }
    return true
}

let getXPrimes = (count) => {
    let primeNumbers = []
    for (var i = 1; i < count; i++) {
        if (isPrime(i)) {
            primeNumbers.push(i)
        }
    }
    return primeNumbers
}

const FIRST_TEN_THOUSAND_PRIMES=getXPrimes(10000);
