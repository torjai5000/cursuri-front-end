// var car={
//   color:"red",
//   nrKm:10000,
//   isNew:false,
//   drive:function(distance){
//     console.log("The car will have "+(this.nrKm+distance))
//   }
// };

// console.log(car.isNew);
// console.log(car["color"]);
// console.log(car.drive(235));

// //declaring classes in js

// function Dog(data){
//   data=data || {};
//   this.name=data.name || "";
//   this.age=data.age || 0;
//   this.breed=data.breed || '';
//   this.isFriendly=data.isFriendly || true;
// }

// Dog.prototype.bark=function(){
//   alert("howl howl, barking like a:"+this.breed);
// }

// var dog1= new Dog();
// dog1.name="Arya";
// dog1.age=2;
// dog1.breed='golden';

// //calling class methods
// dog1.bark();

// var dog2= new Dog();
// dog2.name="Buksi";
// dog2.age=12;
// dog2.breed='dalma';
// dog2.isFriendly=false;

// var dog3= new Dog();
// dog3.name="Pamacs";
// dog3.age=5;
// dog3.breed='korcs';

// var dog4=new Dog({
//   name:"charlie",
//   age:5,
//   breed:"doge"
// });

// var dog5Data={
//   name:"charlieeeeeeeee",
//   age:58,
//   breed:"dogeeeeeeeee"
// }
// var dog5=new Dog(dog5Data);

// dog5.bark();

// console.log(dog1);
// console.log(dog2);
// console.log(dog3);
// console.log(dog4);
// console.log(dog5);


var userData=[{
  name:"John",
  age:34,
  height:1.76,
  weight:80
},
 {
  name:"Marty",
  age:22,
  height:1.65,
  weight:90
},
 {
  name:"Anne",
  age:44,
  height:1.73,
  weight:45
},
 {
  name:"Kevin",
  age:33,
  height:1.80,
  weight:77
}];

function User(){
  this.name="";
  this.age=5;
  this.height=5;
  this.weight=5;
}

User.prototype.calculateBmi=function(){
  return this.weight/(this.height*this.height);
};

for(var i=0;i<userData.length;i++){
  var currentUser=userData[i];
  var u= new User();
  u.name=userData[i].name;
  u.age=userData[i].age;
  u.height=userData[i].height;
  u.weight=userData[i].weight;
  
  var rezBmi=u.calculateBmi();
  console.log(rezBmi);
  
  if(rezBmi<18.5){
    console.log(u.name+" is underweight");
  }else if(18.5<rezBmi<25){
    console.log(u.name+" is normal");
  }else if(25<rezBmi<30){
    console.log(u.name+" is ovweweight");
  }else if(30<rezBmi){
    console.log(u.name+" is obese");
  }
}