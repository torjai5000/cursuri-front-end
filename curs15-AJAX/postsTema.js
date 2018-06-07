window.onload=onHtmlLoaded

function onHtmlLoaded(){
  getPosts();
}

function getPosts(){  
$.ajax('https://jsonplaceholder.typicode.com/posts', {
  method: 'GET',
  success:function(res){
    var html='';
    for(var i=0; i<res.length; i++){
      var item=res[i];
      html+='<article>'+
        '<h2>'+item.title+'</h2>'+
        '<p>'+item.body+'</p>'+ '<textarea data-id="'+item.id+'" rows="4" cols="50"></textarea>'+
        '<button data-id="'+item.id+'">Edit</button>'+'<br>'+
        '<button data-id="'+item.id+'">Delete</button>'+
        '</article>';
    }
    console.log(typeof html);
    elPosts=document.getElementById("list-post");
    elPosts.innerHTML=html;
    But=document.querySelectorAll("button");
    Txt=document.querySelectorAll("textarea");
    Par=document.querySelectorAll("p");
    for(j=0;j<res.length;j++){
      if(But[j].textContent==="Delete"){
        But[j].addEventListener("click", function(){
          this.parentElement.remove();          
        });
      }
      else if(But[j].textContent==="Edit"){
        But[j].addEventListener("click", function(){
          Par[j].innerHTML=Txt[j].value;          
        });
      }
    }
  }
});
}