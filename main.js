let operator = '';
let previousValue = '';
let currentValue = '';

document.addEventListener("DOMContentLoaded",function(){

    let clear = document.querySelector(".clear");
    let equal = document.querySelector(".equal");
    let decimal = document.querySelector(".decimal");

    let numbers = document.querySelectorAll(".number");
    let operators = document.querySelectorAll(".operator");

    let previousScreen = document.querySelector(".previous");
    let currentScreen = document.querySelector(".current");

    numbers.forEach((number) => number.addEventListener("click",function(e){
        handleNumber(e.target.textContent);
        currentScreen.textContent = currentValue;
    }))

    operators.forEach((op) => op.addEventListener("click",function(e){
        handleOperator(e.target.textContent);
        previousScreen.textContent = previousValue + " " +operator;
        currentScreen.textContent = currentValue;
    }))

    clear.addEventListener("click",function(){
        previousValue = '';
        currentValue = '';
        operator = '';
        previousScreen.textContent = currentValue;
        currentScreen.textContent = currentValue;
    })

})

function handleNumber(num){
    if(currentValue.length <= 5){
    currentValue += num;
    }
}

function handleOperator(op){
    operator = op;
    previousValue = currentValue;
    currentValue = '';
}

const add = function(numA,numB) {
    let numC = numA + numB;
/**return numC;*/
console.log(numC);
};

const subtract = function(numA,numB) {
let numC = numA - numB;
/**return numC;	**/
console.log(numC);
};

const multiply = function(numA, numB) {
let numC = numA * numB;
console.log(numC);
};

const divide = function(numA,numB){
    let numC = numA / numB;
    /**return numC;**/
    console.log(numC);
}

const operate = function(stringA,numA,numB){
if(stringA === "+"){
    add(numA,numB);
}else if(stringA === "-"){
    subtract(numA,numB);
}else if(stringA === "*"){
    multiply(numA,numB);
}else if(stringA==="/"){
divide(numA,numB);
}else{
    console.log("please enter a valid operator")
}
}

operate("*",25,50);


