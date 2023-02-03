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