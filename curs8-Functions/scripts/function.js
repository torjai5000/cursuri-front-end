// var persons=[
//   {
//     name:"Ana",
//     gender:"F",
//     height:1.6,
//     weight:60
//   },
//   {
//     name:"Mary",
//     gender:"F",
//     height:1.8,
//     weight:100
//   },
//   {
//     name:"Tamas",
//     gender:"M",
//     height:1.72,
//     weight:65
//   }
// ];

// function printMessage(){
//   console.log("ey ey yo");
// }

// printMessage();

// function print(message){
//   console.log(message);
// }

// print(); //undefined

// print("My first function with parameters")


// function printuser(name,gender,weight,height){
//   var BMI=weight/height/height;
//   console.log(BMI);
//   if(BMI<18.5){
//     console.log(name+" is underweight");
//   }else if(BMI>21.5 && BMI<22){
//     console.log(name+" is IDEAL as fuck");
//   }else if(BMI<25){
//     console.log(name+" is normal");
//   }else if(BMI<30){
//     console.log(name+" is overweight");
//   }
//   else console.log(name+" is obese");
// }


// for(i=0;i<persons.length;i++){
//   printuser(persons[i].name,persons[i].gender,persons[i].weight,persons[i].height);
// }


// function computeSum(a,b){
//   console.log(a+b);
  
//   a="My special number";
//   console.log(a);
// }

// computeSum(2,3);

// var a=2;
// var b=3;

// computeSum(a,b);

// even if a is modified inside the function, it's value is not changed outside'
// a is sent through value

function fullName(name){
  console.log(name.first+" "+name.last);
  name.last="batman"
  console.log(name.last);
}

var tt={
  first:"torjai",
  last:"tamas"
}

fullName(tt);

console.log(tt.last);














