window.onload=function(){
  var currentGameId=getUrlParameter("gameId");
  console.log(currentGameId);
  
   var title=document.getElementsByName("title")[0];
   var releaseDate=document.getElementsByName("releaseDate")[0];
   var genre=document.getElementsByName("genre")[0];
   var publisher=document.getElementsByName("publisher")[0];
   var imageUrl=document.getElementsByName("imageUrl")[0];
   var description=document.getElementsByName("description")[0];
   var editButton=document.getElementById("edit");
  
  
  var edited=new Game();
  edited.fetchData(currentGameId).then(function (){
    title.value=edited.title;
    releaseDate.value=edited.releaseDate;
    genre.value=edited.genre;
    publisher.value=edited.publisher;
    imageUrl.value=edited.imageUrl;
    description.value=edited.description;
  })
   var form=document.getElementsByTagName("form")[0];
  console.log(form);
    editButton.addEventListener("click", function(event){
      edited.editGame(currentGameId, form);
  })

  
  
  
   function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }
}