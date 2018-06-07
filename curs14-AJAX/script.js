// $.ajax('https://jsonplaceholder.typicode.com/posts');

// $.ajax('https://jsonplaceholder.typicode.com/posts' ,{
//   success: function(response){
//     console.log("retek")
//     console.log("retek", response)
//   }
// })

// $.ajax('https://jsonplaceholder.typicode.com/posts/3');

// $.ajax('https://jsonplaceholder.typicode.com/posts/3', {
//  method: 'GET'
// });

// var root = 'https://jsonplaceholder.typicode.com';
// $.ajax({
//  url: root + '/posts/1',
//  method: 'GET',
//  success: function(response) {
//  console.log(response);
//  }
// });

var root = 'http://thecatapi.com/';
$.ajax({
 url: root + 'api/images/get?format=xml&results_per_page=20',
 method: 'GET',
 success: function(response) {
 console.log(response);
 }
});