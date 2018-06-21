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
});