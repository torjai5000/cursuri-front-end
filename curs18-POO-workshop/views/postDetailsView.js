window.onload=function(){
var currentPost=new Post();
var currentPostId=getUrlParameter("postId");
currentPost.fetchData(currentPostId).then(function(){
  var postDetailsContainer=document.getElementById("post-details");
  var postTitleEl=document.createElement("h3");
  postTitleEl.innerHTML=currentPost.title;
  
  //create body HTML node and populate it with currentPostData
  var postBodyEl=document.createElement("p");
  postBodyEl.innerHTML=currentPost.body;
  
  postDetailsContainer.appendChild(postTitleEl);
  postDetailsContainer.appendChild(postBodyEl);
  
  
}).catch(function(){
  console.log("something went wrong on post details view");
})
  
 
  
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