$(document).ready(function(){ 
  var navesc=document.getElementsByTagName("nav")[0];
  var scroll_pos = 0;
    $(document).scroll(function() { 
    scroll_pos = $(this).scrollTop();
    if(scroll_pos > 210) {
      navesc.classList.remove("transNav");
      navesc.classList.add("solid");
    }else{
      navesc.classList.add("transNav");
      navesc.classList.remove("solid");
    }
  });
  
  var element=document.getElementsByClassName("element");
  var title=document.getElementsByClassName("projectTitle");

  for(let i=0; i<element.length;i++){
    element[i].addEventListener("mouseover", function(){
      title[i].style.visibility="visible";
    })
    element[i].addEventListener("mouseout", function(){
      title[i].style.visibility="hidden";
    }
  )}
  
  var aboutBut=document.getElementById("aboutBut");
  var projectsBut=document.getElementById("projectsBut");
  var contactBut=document.getElementById("contactBut");
  var introContent=document.getElementById("introContent");
  var projects=document.getElementById("projects");
  var contactContent=document.getElementById("contactContent");
  
  
  
  $(aboutBut).click(function() {
    
    var currentWidth=$('body').css("width");    
    var suffix = currentWidth.match(/\d+/);
    var positionNR=suffix[0];
    var position=$(introContent).offset().top;
    if(positionNR>995){
    var better=position-80;
    $("body, html").animate({
        scrollTop: better},
        'slow');
    }else{
      var betterBig=position-200;
    $("body, html").animate({
        scrollTop: betterBig},
        'slow');
    }
});
  $(projectsBut).click(function() {
    var currentWidth=$('body').css("width");    
    var suffix = currentWidth.match(/\d+/);
    var positionNR=suffix[0];
    var position=$(projects).offset().top;
    if(positionNR>995){
    var better=position-80;
    $("body, html").animate({
        scrollTop: better},
        'slow');
    }else{
      var betterBig=position-200;
    $("body, html").animate({
        scrollTop: betterBig},
        'slow');
    }
});
  $(contactBut).click(function() {
    $("body, html").animate({
        scrollTop: $(contactContent).offset().top},
        'slow');
});
});