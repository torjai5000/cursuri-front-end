function Comment(){
  this.postId=null;
  this.id=null;
  this.name="";
  this.email="";
  this.body="";
}

Comment.prototype.fetchData=function(id){ //not the same fetchdata
  var that=this; //ha nem lenne atnevezve, a request lenne a this
  return $.ajax("https://jsonplaceholder.typicode.com/posts/"+id+"/comments",{
    method:"GET",
    success:function(data){
      var allComments=[];
      for(var i=0;i<data.length;i++){
        var currentComment=data[i];
        var newComment=new Comment();
        newComment.postId=currentComment.postId;
        newComment.id=currentComment.id;
        newComment.name=currentComment.name;
        newComment.email=currentComment.email;
        newComment.body=currentComment.body;
        
        allComments.push(newComment);
      }
      that=allComments;
  },
    error:function(){
      alert("somethign went wrong fetching comment details");
    }
  })
}