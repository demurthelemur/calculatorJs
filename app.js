const displayNum = document.querySelector("#display");
const buttons = document.querySelectorAll(".button");
const buttons2 = document.querySelectorAll(".buttonCustom");
const resetButton = document.querySelector("#resetBtn");
const resultBtn = document.querySelector("#resultBtn")

let currentNum = null;
let firstNum = 0;
let secondNum = 0;
let operation = null;
let result = 0;

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
resultBtn.addEventListener("click", () => {
    secondNum = displayNum.innerText;
    secondNum = parseInt(secondNum);
    firstNum = parseInt(firstNum);
    if(operation == "+"){
        result = firstNum + secondNum;
        displayNum.innerText = result;
    } else if(operation == "-"){
        result = firstNum - secondNum;
        displayNum.innerText = result;
    } else if(operation == "*"){
        result = firstNum * secondNum;
        displayNum.innerText = result;
    } else if(operation == "/"){
        if(secondNum == "0"){
            displayNum.innerText = "mathematıcal not correct you siksok!";
        } else{
            result = firstNum / secondNum;
            displayNum.innerText = result;
        }
        
    } else{
        displayNum.innerText = "Error!"
    }
})


resetButton.addEventListener("click", () => {
    currentNum = null;
    firstNum = 0;
    secondNum = 0;
    operation = null;
    result = 0;
    displayNum.innerText = 0;
})