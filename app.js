const displayNum = document.querySelector("#display");
const buttons = document.querySelectorAll(".button");
const buttons2 = document.querySelectorAll(".buttonCustom");
const resetButton = document.querySelector("#resetBtn");
const resultBtn = document.querySelector("#resultBtn")

let currentNum = null;
let firstNum = 0;
let secondNum = 0;
let operation = null;

for(let i = 0; i<buttons.length; i++){
    buttons[i].addEventListener("click", () => {
        if(currentNum == null){
            currentNum = buttons[i].innerText;
        } else{
            currentNum += buttons[i].innerText;
        }
        displayNum.innerText = currentNum;
    })
}

for(let i = 0; i < buttons2.length; i++){
    buttons2[i].addEventListener("click", () =>{
        if(operation == null){
            firstNum = currentNum;
            currentNum = null;
            operation = buttons2[i].innerText;
            console.log(operation);
        } else{
            console.log("operator already selected")
        }

    })
}

resetButton.addEventListener("click", () => {
    currentNum = null;
    firstNum = 0;
    secondNum = 0;
    operation = null;
    displayNum.innerText = 0;
})