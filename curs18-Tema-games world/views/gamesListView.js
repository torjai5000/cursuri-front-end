window.onload=function(){
  var games = new GameList();
games.fetchData().then(function(){
  var containerEl=document.getElementById("table");
  for(var i=0;i<games.items.length;i++){
        var gameCont=document.createElement("div");
    $(gameCont).addClass("col-md-4 col-sm-6");
    containerEl.appendChild(gameCont);
        var oneGame=document.createElement("div");
    $(oneGame).addClass("thumbnail");
    gameCont.appendChild(oneGame);
        var img=document.createElement("img");
    $(img).attr("src", games.items[i].imageUrl);
    oneGame.appendChild(img);
        var div=document.createElement("div");
    $(div).addClass("caption");
    oneGame.appendChild(div);
        var p=document.createElement("p");
    oneGame.appendChild(p);
        var h4=document.createElement("h4");
    h4.innerHTML=games.items[i].title;
    div.appendChild(h4);
        var a=document.createElement("a");
    $(a).addClass("btn btn-primary");
    a.innerHTML="More Info"; 
    a.setAttribute("href","http://cursuri-torjai93954079.codeanyapp.com/curs18-Tema-games%20world/pages/show.html?gameId=" + games.items[i]._id);
    a.setAttribute("target","blank");
    p.appendChild(a);
   
  }
}).catch(function(){
  console.log("hope not");
});
  

  var change=document.getElementsByClassName("change")[0];
  change.addEventListener("click", styleChange);
                          
function styleChange(){
  var body=document.getElementsByTagName("body")[0];
  var oneGame=document.getElementsByClassName("thumbnail");
  var buttons=document.getElementsByClassName("btn-primary");
  var jumbotron=document.getElementsByClassName("jumbotron")[0];
  var h4=document.getElementsByTagName("h4");
  var img=document.getElementsByTagName("img");
  var h1=document.getElementsByTagName("h1")[0];
  var p=document.getElementsByTagName("p")[0];
  
   body.classList.toggle("bodychange");
    for(var i=0;i<oneGame.length;i++){
      oneGame[i].classList.toggle("thumbchange");
    }
    for(var j=0;j<buttons.length;j++){
      buttons[j].classList.toggle("buttonchange");
    }
    for(var k=0;k<h4.length;k++){
      h4[k].classList.toggle("h4change");
    }
    for(var l=0;l<img.length;l++){
      img[l].classList.toggle("imgchange");
    }
    jumbotron.classList.toggle("thumbchange");
    p.classList.toggle("h4change");
}
}


