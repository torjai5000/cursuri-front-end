//variable hoisting

// var isValid=true;

// //Hoisting works exactly the same with functions. we can call them before we declare them.
// validate("");
// function validate(inputString){
//   //isValid is global variable-defined outside of function
//   console.log(isValid);
//   //HOISTING- error variable is hoisted (moved at the beginning of the function)
//   //so the code will not thrw an error but it will print undefined
//   console.log(error);
//   if(inputString.length===0){
//     isValid=false;
//     var error=true;
//   console.log("string is not valid");
//   console.log(isValid);
//   console.log(error);
//   }
// }



//   console.log("from global scope");
//   console.log(isValid);
//error variable is a local variable declared in validate function, and it s accessible
//only inside



// console.log("is norbert old?");
// if(isYoung!==true){
//   console.log("he is old");
// }else{
//   console.log("he is young");
// }
// var isYoung=true;





//isvalid2 is not hoisted since it s declared using let
let isValid2=true;

function validate(inputString){
  console.log(isValid2);
  // this will throw a refference error since it s const/let declared variable and it s not hoisted
//   console.log(error);
  if(inputString.length===0){
    const error=true;
     isValid2=false;
  console.log("string is not valid");
  console.log(isValid2);
  console.log(error);
  }
}
  console.log("from global scope");
console.log(isValid2);
validate("");