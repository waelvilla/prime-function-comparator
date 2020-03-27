/*
Resources: 
https://en.wikipedia.org/wiki/Formula_for_primes


Formulas: 
1- https://wikimedia.org/api/rest_v1/media/math/render/svg/91340957e8616e6cdb438a0bede7e4ba804e4922


*/


//Formulas to be tested
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

const FIRST_TEN_THOUSAND_PRIMES=getFirstXPrimes(10000);

formulas.map((formulaObject)=>{
    let startTime= new Date()
    let primeNumbers=[]
    for(var i =0; i<10000; i++){
        let number= formulaObject.formula(i)
        if(number && isPrime(number)){
            primeNumbers.push(number)
        }
    }
    let endTime= new Date()
    let timeElapsed= (endTime - startTime) / 1000
    // console.log(primeNumbers);
    console.log("formula: ", formulaObject.name, "took", timeElapsed, "seconds");
})