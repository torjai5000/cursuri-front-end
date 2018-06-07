window.onload=onHtmlLoaded
var root='https://jsonplaceholder.typicode.com/posts';
function onHtmlLoaded(){
  getPosts();
}

function getPosts(){
  fetch(
   root, {
   method: 'GET'
  }).then(function(response){
    console.log("response:",response)
  return response.json();
  }).then(callOnSuccess);
  }

function callOnSuccess(response){
  console.log("Success=", response);
  var posts=response.slice(0,10);
  console.log("POST=",posts);
  return posts;
}

function callOnError(xhr){
  console.log("Error=",xhr);
  var elPosts=document.getElementById("list-post");
  elPosts.innerHTML="Cannot get post! Error"
}

function callOnCommentsSuccess(response){
  console.log("Comments=",response);
}