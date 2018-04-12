// 1

for(var i=1;i<=20;i++){
	console.log(i);
}

// 2

for(var i=1;i<20;i=i+2){
	console.log(i);
}

// 3

var arr=[8,221,3,3,3,5,35];
var tot=0;
for(var i=0;i<arr.length;i++){
	tot=tot+arr[i];
}
console.log(tot);

// 4

var max=arr[0];
for(var i=0;i<arr.length;i++){
	if(arr[i]>max){
		max=arr[i];
	}
}
console.log(max);

// 5

var nr=parseInt(prompt("What numnber do you want to count in the array?"));

var count=0;
for(var i=0;i<arr.length;i++){
	if ((arr[i])===nr) {
		count=count+1;
	}
}
console.log(count);

// 6 bonus

var str="almaalmapirosalma";

var letter=prompt("What letter do you want to count in the array?");

var count=0;
for(var i=0;i<str.length;i++){
	if ((str[i])===letter) {
		count=count+1;
	}
}
console.log(count);











