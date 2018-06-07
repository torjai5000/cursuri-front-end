function Game(){
  this._id="";
  this.title="";
  this.releaseDate=null;
  this.genre="";
  this.publisher="";
  this.imageUrl="";
  this.description="";
}

Game.prototype.fetchData=function(id){ //not the same fetchdata
  var that=this; //ha nem lenne atnevezve, a request lenne a this
  return $.ajax("https://games-world.herokuapp.com/games/"+id,{
    method:"GET",
    success:function(data){
      that._id=data._id;
      that.title=data.title;
      that.releaseDate=data.releaseDate;
      that.genre=data.genre;
      that.publisher=data.publisher;
      that.imageUrl=data.imageUrl;
      that.description=data.description;
  },
    error:function(){
      alert("somethign went wrong fetching game details");
    }
  })
}

Game.prototype.createGame=function (form){
  console.log(form);
    var url = "https://games-world.herokuapp.com/games/";
    var formData = {};
    $(form).find("input[name]").each(function (index, node) {
        formData[node.name] = node.value;
    });
    $.post(url, formData);
}

Game.prototype.deleteGame=function (id){
  $.ajax("https://games-world.herokuapp.com/games/"+id, {
  method: 'DELETE',
  success:function(res){
    console.log("Post deleted=> ",res);
    }
  })
}

Game.prototype.editGame=function (id, form){
  var formData = {};
  $(form).find("input[name]").each(function (index, node) {
        formData[node.name] = node.value;
    });
  $.ajax("https://games-world.herokuapp.com/games/"+id, {
  method: 'PUT',
  data:formData,
  success:function(res){
    console.log("Post edited=> ",res);
    }
  })
}