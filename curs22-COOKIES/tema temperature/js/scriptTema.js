window.onload=() =>{
  
    const getCookies=()=>{
    const cookieItem={};
    const cookiesString=document.cookie;
//     //color=green; gangsta=yes;
    const separatedEntries=cookiesString.split(';');
    //["color=green", " gangsta=yes", " age=8"]
    separatedEntries.forEach((entry) => {
//       //entry <=> ' color=green'
      const trimmedEntry=entry.trim();
//       //trim removes the extra space entry <=> 'color=green'
      const splitEntry=trimmedEntry.split('=');
//       //splitEntry ['color', 'green']
      cookieItem[splitEntry[0]]=splitEntry[1];
//       //cookieItem <=> {color:'green'}
    });
    return cookieItem;
  }
  const cookies=getCookies();
  
  const userTemp=cookies.temp;
  if(userTemp){
    document.querySelector(`[value=${userTemp}`).setAttribute('checked', true);
  }
  
  const radioBtns=document.querySelectorAll('input[type=radio]');
  radioBtns.forEach((btn)=>{
    btn.addEventListener('change', (e)=>{
      const newTemp=e.target.value;
      document.cookie="temp="+newTemp;
      location.reload(true);
    })
  });
  
$.ajax('https://api.wunderground.com/api/cfbfc5f603141e07/conditions/q/RO/Cluj_Napoca.json', {
  method: 'GET',
  success:function(res){
    celsius=res.current_observation.temp_c;
    fahrenheit=res.current_observation.temp_f;
  }
}).then(function(){
  let result=document.getElementsByClassName("result")[0];
  if($(radioBtns[0]).is(':checked')){
    result.innerHTML="It's "+celsius+" Celsius outside";
  }else if($(radioBtns[1]).is(':checked')){
    result.innerHTML="It's "+fahrenheit+" Fahrenheit outside";
  }
})
}