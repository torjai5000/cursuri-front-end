var rps=["rock","paper","scrissors"];

function play(){
  var icc=Math.floor(Math.random()*3);
  var cc=rps[icc];
  var iuc=Math.floor(Math.random()*3);
  var uc=rps[iuc];
  console.log("Computer choice:"+'"'+cc+'"')
  console.log("User choice:"+'"'+uc+'"')
  if(cc==uc){
    console.log("It's a draw");
  }else if((icc===iuc+1)||(icc===0 && iuc===2)){
    console.log("Computer won");
  }else{
    console.log("User won");
  }
}

play();