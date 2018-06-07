window.onload=function(){
var currentGame=new Game();
var currentGameId=getUrlParameter("gameId");
currentGame.fetchData(currentGameId).then(function(){
  console.log(currentGame);
  var Info1=document.getElementById("Info1");
  var Info2=document.getElementById("Info2");
  var Info3=document.getElementById("Info3");
  var title=document.getElementById("title");
  var desc=document.getElementById("desc");
  var img=document.querySelector("img");
  Info1.innerHTML="Release date: "+new Date(currentGame.releaseDate*1000);
  Info2.innerHTML="Genre: "+currentGame.genre;
  Info3.innerHTML="Publisher: "+currentGame.publisher;
  title.innerHTML=currentGame.title;
  desc.innerHTML=currentGame.description;
  $(img).attr("src", currentGame.imageUrl);


}).catch(function(){
  console.log("something went wrong on game details view");
})
  //delete part
  var deleteButton=document.querySelector("#deleteButton");
  deleteButton.addEventListener("click", function(event){
    event.preventDefault();
    currentGame.deleteGame(currentGameId).then(function (){
      window.location.replace("http://cursuri-torjai93954079.codeanyapp.com/curs18-Tema-games%20world/pages/home.html");
    })
//     setTimeout(function(){
//       window.location.replace("http://cursuri-torjai93954079.codeanyapp.com/curs18-Tema-games%20world/pages/home.html");
//     },1000);  
  })
  
//   var promise1 = new Promise(function(resolve, reject) {
//   resolve(deleteButton.addEventListener("click", function(event){
//     event.preventDefault();
//     currentGame.deleteGame(currentGameId);
// }));

// promise1.then(function(value) {
//   window.location.replace("http://cursuri-torjai93954079.codeanyapp.com/curs18-Tema-games%20world/pages/home.html");
// });
  
  
  
  var edit=document.querySelector("#edit");
  edit.setAttribute("href","http://cursuri-torjai93954079.codeanyapp.com/curs18-Tema-games%20world/pages/edit.html?gameId=" +currentGameId);
  
/**
     * It retrieves a query (URL) parameter value
     * 
     * It expects you to send the parameter key(before '=')
     * **/
    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }
}

