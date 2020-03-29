

window.onload= run()


function setFunction(number){
    console.log("ff ", number);
    document.getElementById('dropdownTitle').innerHTML= number
}

function checkPrime(){
    const userInput= document.querySelector('#userInput')
console.log(userInput.value)
}


function run(){
    let dropdown= document.querySelector('#dropdownContent')

    
    formulas.map(({name})=>{
        var anchor = document.createElement('a')
        anchor.onclick=`return setFunction(${name})`
        anchor.innerHTML= name
        dropdown.appendChild(anchor)
    })




}
function createLink(image) {
  let cards = document.getElementsByClassName('cards')


}
