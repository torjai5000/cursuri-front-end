function Post(){
//   this.id=null;
//   this.title="";
//   this.body="";
//   this.userId=null;
}

Post.prototype.fetchData=function(id){ //not the same fetchdata
  var that=this; //ha nem lenne atnevezve, a request lenne a this
  return $.ajax("https://jsonplaceholder.typicode.com/posts/"+id,{
    method:"GET",
    success:function(data){
      that.id=data.id;
      that.title=data.title;
      that.body=data.body;
      that.userId=data.userId;
  },
    error:function(){
      alert("somethign went wrong fetching post details");
    }
  })
}