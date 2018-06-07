function CommentList(){
  this.items=[];
}

CommentList.prototype.fetchDataGangsta=function(id){
  var that=this;
   return $.ajax('https://jsonplaceholder.typicode.com/posts/'+id+'/comments', {
    method: 'GET',
    success:function(commentsData){
      for(var i=0;i<commentsData.length;i++){
        var commentItem=commentsData[i];
        var commentModel=new Comment2();
        // set all the data that we recieved from server on the comment model
        commentModel.postId=commentItem.postId;
        commentModel.id=commentItem.id;
        commentModel.name=commentItem.name;
        commentModel.email=commentItem.email;
        commentModel.body=commentItem.body;
        //push the model in items array
        that.items.push(commentModel);
      }
    },
    error:function(){
      alert("something went wrong");
    }
  });
}