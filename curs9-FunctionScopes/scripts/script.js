var a=2; //global

function displayVariables(){
  var b=3;
  c=4
  console.log("a inside function:"+a) //2
  console.log("b inside function:"+b) //3
  console.log("c inside function:"+c) //4
}

displayVariables();

  console.log("global a:"+a) //2
  console.log("global b:"+ typeof b) //3
  console.log("global c:"+c) //4

//-----------------------------------------

var x=1 //global

function firstFunction(){
  var y=2; //local in firstFunction
  
  function secondFunction(){
    var z=3;
    console.log("Second x="+x)
    console.log("Second y="+y)
    console.log("Second z="+z)
    
    function thirdFunction(z){
      z=5;
      console.log("Third x="+x)
      console.log("Third y="+y)
      console.log("Third z="+z)
    }
    thirdFunction(z);
  }
  secondFunction();
  
  console.log("First x="+x)
  console.log("First y="+y)
  console.log("First z="+ typeof z) //error mert parameterkent volt bekerve thridFunction(z) !!!
}

firstFunction();

//------------------------------------------

(function demoHoisting(){
  var a=1000;
  console.log(a+" "+b);
  var b=2000;
})(); //IIFE

//this is identical with:

(function demoHoisting(){
  var a=1000;
  var b;
  console.log(a+" "+b);
  b=2000;
})(); //IIFE

//--------------------------------

s=function(){
	console.log("alma")
}

s();
l();

function l(){
  console.log("korte")
}

//--------------------------------------














