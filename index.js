const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

let passwordOne = document.getElementById("password-one")
let passwordTwo = document.getElementById("password-two")
let showButtons = document.querySelector(".result-container")
let passwordLength = document.getElementById("password-length")
let numbersCB = document.getElementById("numbers-cb")
let symbolsCB = document.getElementById("symbols-cb")

function generatePassword() {
    let allowedCharacters = letters
    if(numbersCB.checked === true){
        allowedCharacters = allowedCharacters.concat(numbers)
    }
    if (symbolsCB.checked === true) {
        allowedCharacters = allowedCharacters.concat(symbols)
    }
    passwordOne.textContent = ""
    passwordTwo.textContent = ""
    for (i = 0; i < passwordLength.value; i++) {
        showButtons.style.display = "flex"
        let randomIndexOne = Math.floor(Math.random() * allowedCharacters.length)
        let randomIndexTwo = Math.floor(Math.random() * allowedCharacters.length)
        passwordOne.textContent += allowedCharacters[randomIndexOne]
        passwordTwo.textContent += allowedCharacters[randomIndexTwo]
     }      
}

function copyPasswordOne() {
    let copiedPasswordOne = passwordOne.textContent
    navigator.clipboard.writeText(copiedPasswordOne)
    passwordOne.textContent = "Copied!"
    setTimeout(function() {
        passwordOne.textContent = copiedPasswordOne
    }, 1500)
}

function copyPasswordTwo() {
    let copiedPasswordTwo = passwordTwo.textContent
    navigator.clipboard.writeText(copiedPasswordTwo)
    passwordTwo.textContent = "Copied"
    setTimeout(function() {
        passwordTwo.textContent = copiedPasswordTwo
    }, 1500)
}

