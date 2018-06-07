function GameList(){
  this.items=[];
}

GameList.prototype.fetchData=function(id){
  var that=this;
   return $.ajax('https://games-world.herokuapp.com/games/', {
    method: 'GET',
    success:function(gamesData){
      for(var i=0;i<gamesData.length;i++){
        var gameItem=gamesData[i];
        var gameModel={};
        // set all the data that we recieved from server on the game model
        gameModel._id=gameItem._id;
        gameModel.title=gameItem.title;
        gameModel.imageUrl=gameItem.imageUrl;
        gameModel.description=gameItem.description;
        //push the model in items array
        that.items.push(gameModel);
      }
    },
    error:function(){
      alert("something went wrong");
    }
  });
}