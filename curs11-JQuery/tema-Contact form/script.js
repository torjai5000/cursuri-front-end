window.addEventListener("load", function() {
  var first=document.querySelector("input[name='first']")
  var last=document.querySelector("input[name='last']")
  var textarea=document.querySelector("textarea")
  var submit=document.querySelector("input[type='submit']")
  var form=document.querySelector("form")
  var conf=document.getElementById("conf")
  var spam=document.getElementsByTagName("spam")[0]
  
  var text=[first,last,textarea];
  
  form.addEventListener("submit",function(){
    event.preventDefault();
    var x=0;
    for(i=0;i<text.length;i++){
      if(text[i].value===""){
        text[i].classList.toggle("invalid")
        x++;
    }}
    if(x===0){
      console.log("First Name:",first.value)
      console.log("Last Name:",last.value)
      console.log("Message:",textarea.value)
      var gender=document.querySelector('input[name="sex"]:checked');
      console.log("Gender:",gender.value)
      spam.innerHTML=first.value;
      conf.style.visibility="visible";
    }
  })
 });
