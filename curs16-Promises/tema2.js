window.onload=onHtmlLoaded
var root='https://jsonplaceholder.typicode.com/users';
function onHtmlLoaded(){
  getAlbums();
}

function getAlbums(){
 $.ajax(root)
    .then(callOnSuccess, callOnError)
    .then( function(users){
   elArticle=document.getElementById("list-post");
      for(var i=0;i<users.length;i++){
        var user=users[i];
        var elem=document.createElement('article'); 
//         console.log("Albums of "+user.name+":")
        $.ajax(root+'/'+user.id+'/albums')
          .then(callOnAlbumsSuccess);
          elem.innerHTML=  '<h2>Albums of '+user.name+':</h2>'+
          '<p>'+response.title+'</p>';
        elArticle.appendChild(elem);
      }
 });
}

function callOnSuccess(users){
  console.log("Success=", users);
  return users;
}

function callOnError(xhr){
  console.log("Error=",xhr);
  var elPosts=document.getElementById("list-post");
  elPosts.innerHTML="Cannot get post! Error";
}

function callOnAlbumsSuccess(response){
  console.log(response);
  return response;
}