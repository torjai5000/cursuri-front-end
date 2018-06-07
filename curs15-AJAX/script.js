// $.ajax('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'GET',
//   success:function(res){
//     console.log("Get post: ", res)
//   }
// });

//de unde stiu ce este res?

// $.ajax('https://jsonplaceholder.typicode.com/posts', {
//   method: 'GET',
//   success:function(res){
//     for(var i=0; i<res.length; i++){
//       var item=res[i];
//       console.log("Get title: ", item.title)
//       console.log("Get body: ", item.body)
//     }
//   }
// });

// $.ajax('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   data:{
//     userId: 1,
//     title:"New post",
//     body:"New post body"
//   },
//   success:function(res){
//     console.log("Create post= ",res);
//     }
//   })

$.ajax('https://jsonplaceholder.typicode.com/poss/1', {
  method: 'PUT',
  data:{
    userId: 1,
    title:"VERYNew post",
    body:"VERYNew post body"
  },
  success:function(res){
    console.log("Create VERYNEW post= ",res);
    },
  error:function(err){
    console.log(err);
}
  })

// $.ajax('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'DELETE',
//   success:function(res){
//     console.log("Post deleted=> ",res);
//     }
//   })

// $.ajax('https://jsonplaceholder.typicode.com/posts/1/comments', {
//   method: 'GET',
//   success:function(res){
//     console.log("Get comments: ", res)
//   }
// });