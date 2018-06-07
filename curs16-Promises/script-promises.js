window.onload=onHtmlLoaded
var root='https://jsonplaceholder.typicode.com/posts';
function onHtmlLoaded(){
  getPosts();
}

function getPosts(){
 $.ajax(root)
    .then(callOnSuccess, callOnError)
    .then( function(posts){
      console.log("The 10 posts are:", posts);
      for(var i=0;i<posts.length;i++){
        var post=posts[i]
        $.ajax(root+'/'+post.id+'/comments').then(callOnCommentsSuccess)
      }
 });
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