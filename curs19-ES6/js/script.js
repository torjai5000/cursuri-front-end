window.onload=function(){
  console.log("log 1");
  // setTimeout(function(){
  //   console.log("this is delayed");
  // }, 10000);

  var veryImportanPromise=new Promise(function(resolve, reject){
    setTimeout(function(){
      console.log("log from setTimeout");
      resolve();
    },10000);
  });

  veryImportanPromise.then(function(){
    console.log("log from the then function");
  }).catch(function(){
    console.log("log from catch function");
  })

  var onClickPromise=new Promise(function(resolve, reject){
    document.getElementById("submit").addEventListener("click",function(){
      resolve();
    });
    document.getElementById("cancel").addEventListener("click",function(){
      reject();
    });
  });

  onClickPromise.then(function(){
    console.log("Go cookies");
  }).catch(function(){
    console.log("No cookies for you");
  });
  
  function sum(a,b){
    return a+b;
  }
  var res=sum(3,4);
  console.log(res);
}