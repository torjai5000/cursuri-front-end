window.onload=function(){
var list=[{
    id: 1,
    name: "Telefon mobil HTC U 11, Dual SIM, 64GB, 4G, Brilliant Black",
    imageUrl: "https://s12emagst.akamaized.net/products/6053/6052836/images/res_151cbf9f491dc8b1555e14bfe5a60fbc_150x150_bpqg.jpg",
    quantity: 5,
    price: 1200
},{
    id: 2,
    name: "Acumulator extern A+, 20000 mAh",
    imageUrl: "https://s12emagst.akamaized.net/products/8023/8022875/images/res_afbd4b05ee5bd92012da2404452eb9ed_450x450_lfqn.jpg",
    quantity: 15,
    price: 300
},{
    id: 3,
    name: "Acumulator extern Smart Charge 1010 10000 mAh cablu micro USB Negru",
    imageUrl: "https://s12emagst.akamaized.net/products/8168/8167260/images/res_70379d488494cd7c8c5d4012bdb680c9_450x450_d5do.jpg",
    quantity: 7,
    price: 150
},{
    id: 4,
    name: "Telefon mobil Meizu M6, Dual SIM, 32GB, 4G, Black",
    imageUrl: "https://s12emagst.akamaized.net/products/14586/14585039/images/res_154d644544cb77ce57d6b6b87aa108e0_450x450_19s3.jpg",
    quantity: 7,
    price: 1000
},{
    id: 5,
    name: "Telefon mobil Nokia 3, Dual SIM, 16GB, Copper White",
    imageUrl: "https://s12emagst.akamaized.net/products/8665/8664917/images/res_fd6e9f225340a180c38950103c489c4e_450x450_u1ak.jpg",
    quantity: 7,
    price: 1685
}];

localStorage.setItem("list", JSON.stringify(list));
const listGet=localStorage.getItem("list");
const listGetObj=JSON.parse(listGet);
for(var i=0;i<listGetObj.length;i++){
  var body=document.getElementsByTagName("body")[0];
  var id=document.createElement("p");
  var name=document.createElement("p");
  var img=document.createElement("img");
  var quantity=document.createElement("p");
  var price=document.createElement("p");
  var button=document.createElement("button");
  
  id.innerHTML="Id: "+listGetObj[i].id; 
  name.innerHTML="Name: "+listGetObj[i].name;
  $(img).attr("src", listGetObj[i].imageUrl);
  quantity.innerHTML="Quantity: "+listGetObj[i].quantity; 
  price.innerHTML="Price: "+listGetObj[i].price; 
  button.innerHTML="buy";
  $(button).addClass("button"+i);
  
  body.appendChild(id);
  body.appendChild(name);
  body.appendChild(img);
  body.appendChild(quantity);
  body.appendChild(price);
  body.appendChild(button);


}
  var buttons=document.getElementsByTagName("button");
  
  for(let j=0;j<buttons.length;j++){
    buttons[j].addEventListener("click", function(){
      let newQ=list[j].quantity-1;
      console.log(newQ);
      list[j].quantity=newQ;
      if(newQ===0){
        delete list[j];
      }
      localStorage.setItem("list", JSON.stringify(list));
  })
  }
  
}