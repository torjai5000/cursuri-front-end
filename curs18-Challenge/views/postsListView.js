var posts = new PostList();
posts.fetchData().then(function(){
  var containerEl=document.getElementById("container");
  for(var i=0;i<posts.items.length;i++){
    var postEl=document.createElement("a");
    postEl.setAttribute("href","http://cursuri-torjai93954079.codeanyapp.com/curs18-Challenge/pages/postDetails.html?postId=" + posts.items[i].id);
    postEl.setAttribute("target","blank");
    postEl.innerHTML=i+" "+posts.items[i].title+"<br>";
    containerEl.appendChild(postEl);
  }
}).catch(function(){
  console.log("hope not");
});


