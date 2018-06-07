const setTimeoutId = setTimeout(() =>{
  console.log("hey from set timeout");
  clearInterval(setIntervalId);
},5000);

console.log(setTimeoutId);
let summ=0;

const setIntervalId = setInterval(() => {
  summ+=1; //sum=sum+1
  console.log(summ);
}, 1000);

window.addEventListener("unload", () =>{
  //teardown/cleanup
  //this statement is used for debugging, the code will automatically stop thereif browser console is open
  debugger;
  clearTimeout(setTimeoutId);
})
const user={
  name:"foo",
  age:55
}

localStorage.setItem("userData", JSON.stringify(user));

window.localStorage.setItem("key1", "Ding Dong");
//get a string from local storage

const key1val=localStorage.getItem("key1");
console.log(key1val);

const userDataFromLocalStorage=localStorage.getItem("userData");
//we need to transform the string returrned by getitem back to object before accessing object s properties
const userDataFromLocalStorageObj=JSON.parse(userDataFromLocalStorage);

console.log(userDataFromLocalStorageObj);
console.log(userDataFromLocalStorageObj.age);

localStorage.removeItem("key1");