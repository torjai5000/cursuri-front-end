var persons=[
  {
    name:"Ana",
    gender:"F",
    height:1.6,
    weight:60
  },
  {
    name:"Mary",
    gender:"F",
    height:1.8,
    weight:100
  },
  {
    name:"Tamas",
    gender:"M",
    height:1.72,
    weight:65
  }
]
// for(i=0;i<persons.length;i++){
//   var ps=persons[i];
//   var BMI=ps.weight/ps.height/ps.height;
//   console.log(BMI);
//   if(BMI<18.5){
//     console.log(ps.name+" is underweight");
//   }else if(BMI>21.5 && BMI<22){
//     console.log(ps.name+" is IDEAL as fuck");
//   }else if(BMI<25){
//     console.log(ps.name+" is normal");
//   }else if(BMI<30){
//     console.log(ps.name+" is overweight");
//   }
//   else console.log(ps.name+" is obese");
// }

function myfunction(pers){
  for(i=0;i<pers.length;i++){
  var ps=pers[i];
  var BMI=ps.weight/ps.height/ps.height;
  console.log(BMI);
  if(BMI<18.5){
    console.log(ps.name+" is underweight");
  }else if(BMI>21.5 && BMI<22){
    console.log(ps.name+" is IDEAL as fuck");
  }else if(BMI<25){
    console.log(ps.name+" is normal");
  }else if(BMI<30){
    console.log(ps.name+" is overweight");
  }
  else console.log(ps.name+" is obese");
}
}

myfunction(persons);
