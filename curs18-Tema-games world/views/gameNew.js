window.onload=function(){

  var submit=document.getElementsByTagName("button")[0];
  var form=document.getElementsByTagName("form")[0];
  
  var newGame=new Game();
  
   submit.addEventListener("click", function(event){
      newGame.createGame(form);
    })
}
