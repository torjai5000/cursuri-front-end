window.onload=() =>{

  //Get cookies


  //set cookie
  document.cookie="color=green";
  document.cookie="gangsta=yes";
  document.cookie="age=8";
  console.log(document.cookie);

  const getCookies=()=>{
    const cookieItem={};
    const cookiesString=document.cookie;
//     //color=green; gangsta=yes;
    const separatedEntries=cookiesString.split(';');
    //["color=green", " gangsta=yes", " age=8"]
    console.log(separatedEntries);
    separatedEntries.forEach((entry) => {
//       //entry <=> ' color=green'
      const trimmedEntry=entry.trim();
      console.log(trimmedEntry);
//       //trim removes the extra space entry <=> 'color=green'
      const splitEntry=trimmedEntry.split('=');
      console.log(splitEntry);
//       //splitEntry ['color', 'green']
      cookieItem[splitEntry[0]]=splitEntry[1];
      console.log(cookieItem);
//       //cookieItem <=> {color:'green'}
    });
    return cookieItem;
  }
  const cookies=getCookies();
  const userLang=cookies.lang;
  console.log(userLang);
  if(userLang){
    document.querySelector(`[value=${userLang}`).setAttribute('checked', true);
  }
//   //update cookie when user changes lang option
  const radioBtns=document.querySelectorAll('input[type=radio]');
  radioBtns.forEach((btn)=>{
    btn.addEventListener('change', (e)=>{
    const newLang=e.target.value;
     document.cookie="lang="+newLang; //"lang="+newLang
  }) 
  });
}

