window.onload = () => {
    let dropdown = document.querySelector('#dropdownContent')
    formulas.map(({ name, formula }) => {
        var anchor = document.createElement('a')
        anchor.innerHTML = name
        anchor.onclick = () => setFunction({ name, formula })
        dropdown.appendChild(anchor)
    })
}

let selectedFunction = {}

function setFunction({ name, formula }) {
    console.log("ff ", formula);
    selectedFunction = { name, formula }
    document.getElementById('dropdownTitle').innerHTML = name
}

function checkPrime() {
    const maxPrime = document.querySelector('#userInput').value

    let { primeNumbers, failedIndices, firstBreak, timeElapsed } = runFormula({
        name: selectedFunction.name,
        formula: selectedFunction.formula,
        max: maxPrime
    })
    setOutputs(maxPrime, primeNumbers, failedIndices, firstBreak, timeElapsed);
    ShowPie(maxPrime, primeNumbers.length)

}

function setOutputs(maxPrime, primeNumbers, failedIndices, firstBreak, timeElapsed) {
    const outputMax = document.querySelector('#maxNumber')
    const output = document.querySelector('#output')
    const primeNumbersHTML = document.querySelector('#primeNumbers')
    const primeCountHTML = document.querySelector('#primeCount')
    const failedIndicesHTML = document.querySelector('#failedIndices')
    const firstBreakHTML = document.querySelector('#firstBreak')
    const timeElapsedHTML = document.querySelector('#timeElapsed')

    output.classList.remove('output')
    TheImage.classList.add('hide')
    outputMax.innerHTML = maxPrime ? maxPrime : ''
    primeNumbersHTML.innerHTML = primeNumbers ? printArray(primeNumbers) : ''
    primeCountHTML.innerHTML = primeNumbers.length
    failedIndicesHTML.innerHTML = failedIndices ? failedIndices.length : ''
    timeElapsedHTML.innerHTML = timeElapsed ? timeElapsed : 0
    firstBreakHTML.innerHTML = firstBreak ? firstBreak : ''

}

function printArray(arr) {
    let output = ''
    output += arr[0];
    for (var i = 1; i < arr.length; i++) {
        output = output + ",    " + arr[i]
    }
    return output
}

function run() {

}