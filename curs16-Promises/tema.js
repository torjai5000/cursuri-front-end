window.onload=onHtmlLoaded
var root='https://jsonplaceholder.typicode.com/users';
function onHtmlLoaded(){
  getAlbums();
}

function getAlbums(){
 $.ajax(root)
    .then(callOnSuccess, callOnError)
    .then( function(users){
      for(var i=0;i<users.length;i++){
        var user=users[i];
//         console.log("Albums of "+user.name+":")
        $.ajax(root+'/'+user.id+'/albums')
          .then(callOnAlbumsSuccess);
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
  elPosts.innerHTML="Cannot get post! Error"
}

function callOnAlbumsSuccess(response){
  console.log(response);
}