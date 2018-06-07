//KERDEEEEEEEEEEEEEEEEEEEEEEEEES- DATA-ID NEM LETEZETT AMIG MEGADTUK VOLNA??????????? - letezik a data- es amit a vonal utan irok az akkor jon letre, hat nem fasza? Plusz, nem latszik

window.onload=onHtmlLoaded

function onHtmlLoaded(){
  getPosts();
  bindEvent();
}

function getPosts(){  
$.ajax('https://jsonplaceholder.typicode.com/posts', {
  method: 'GET',
  success:function(res){
    var html='';
    elPosts=document.getElementById("list-post");
    for(var i=0; i<res.length; i++){
      var item=res[i];
      var elem=document.createElement('article');
      elem.innerHTML=  '<h2>'+item.title+'</h2>'+
        '<p>'+item.body+'</p>'+
        '<button data-edit-id="'+item.id+'">Edit</button>'+
        '<button data-delete-id="'+item.id+'">Delete</button>'
      
      elPosts.appendChild(elem)
      
      var deleteBtn=document.querySelector('[data-delete-id="'+item.id+'"]');
      deleteBtn.addEventListener("click", function(){
        var id=this.getAttribute('data-delete-id')
        deletePost(id);
      });
      
      var editBtn=document.querySelector('[data-edit-id="'+item.id+'"]');
      editBtn.addEventListener("click", function(){
        var id=this.getAttribute('data-edit-id')
        getPost(id);
      });
    }
  }
});
}

function deletePost(id){
  $.ajax('https://jsonplaceholder.typicode.com/posts/'+id, {
  method: 'DELETE',
  success:function(res){
    console.log("Post deleted=> ",res);
    }
  })
}

function bindEvent(){
  var submitBtn=document.getElementById('post-submit');
  submitBtn.addEventListener('click', function(e){
    e.preventDefault();
    var title=document.getElementById('title').value;
    var body=document.getElementById('body').value;
    var id=document.getElementById('post-id').value;
    var data={
      title:title,
      body:body
    }
    
    updatePost(id,data);
  })
}

function updatePost(id,data){
  $.ajax('https://jsonplaceholder.typicode.com/posts/'+id, {
  method: 'PUT',
  data:data,
  success:function(res){
    console.log("Update post= ",res);
    }
  })
}

function getPost(id){
$.ajax('https://jsonplaceholder.typicode.com/posts/'+id, {
  method: 'GET',
  success:function(res){
      console.log('Gets post=', res);
      console.log("Get title: ", res.title);
      console.log("Get body: ", res.body);
    var id=document.getElementById('post-id');
    var title=document.getElementById('title');
    var body=document.getElementById('body');
    id.value=res.id;
    title.value=res.title;
    body.value=res.body;
  }
});
}