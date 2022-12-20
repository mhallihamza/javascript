const product = [
    {
       id: 0,
       image: 'images/0.jpg',
       title: 'Blue denim shirt',
       color:'Color: blue',
       size: 'Size: M',
       price: 17.5
    },
    {
        id: 1,
        image: 'images/1.jpg',
        title: 'Red hoodie',
        color:'Color: red',
        size: 'Size: M',
        price: 17.5  
    },
    {
        id: 2,
        image: 'images/2.jpg',
        title: 'Blue jeans shoe',
        color:'Color: blue',
        size: 'Size: 40',
        price: 17.5  
    },
    {
        id: 3,
        image: 'images/3.jpg',
        title: 'Moroccan national team shirt',
        color:'Color: white',
        size: 'Size: M',
        price: 17.5  
    }
];
let addcart= document.getElementsByClassName("addcart");
for(let i=0;i<addcart.length;i++) {
    addcart[i].addEventListener("click",() => { addtocart(i)});
}
const categories = [...new Set(product.map((item)=> {
    return item;
                  }))];
var cart = JSON.parse(localStorage.getItem("data"))||[];
display();
function addtocart(a) {
    function trouve(id) {
        return cart.some(function(el) {
          return el.id === id;
        }); 
      }
    if(cart.length==0) {
    cart.push({...categories[a]});
    display();
    totalprice();}
   else if(!trouve(a)) {
    cart.push({...categories[a]});
    display();
    totalprice();
   }
  else { alert("thest product it's already exist")}
};
function decr2(event) {
    let x = event.target.parentElement.children[1].value;
    var found = event.target.parentElement.parentElement.parentElement.id;
    var tes = document.getElementById(found);
    var v = tes.children[3].children[4];
    var stocks= parseFloat(v.innerText);
    stocks++;
    x--;
    event.target.parentElement.children[1].value=x;
    v.innerText = stocks +" in stocks"
    totalprice();
}
function inc2(event) {
    let y = event.target.parentElement.children[1].value;
    var found = event.target.parentElement.parentElement.parentElement.id;
    var tes = document.getElementById(found);
    var v = tes.children[3].children[4];
    var stocks= parseFloat(v.innerText);
    stocks--;
    y++;
    event.target.parentElement.children[1].value=y;
    v.innerText = stocks +" in stocks"
    totalprice();
}
function display() {
    let j=0;
    localStorage.setItem("data",JSON.stringify(cart));
    if(cart.length==0) {
        document.getElementById("main").innerHTML='<div class="h-9 text-center mt-3">Your cart is empty</div>';
        document.getElementById("total").innerText="$ "+0+".00"
    }
    else {
       document.getElementById("main").innerHTML=cart.map((items)=> 
      {
          var {id, image, title, color, size, price} = items;
          let val = document.getElementsByClassName("count")[id].value;
          return( 
          `<div class="cartimage" id="${id}">
          <div class=" h-0">
          <img class="w-36 h-40" src=${image}></img>
          </div>
          <div>
          <div class="flex">
          <div>
          <h4 class="title">${title}</h4>
          <p class="color">${color}</p>
          <p class="color">${size}</p></div>
          <div class="mt-8"><h2 class="price">$ ${price}</h2>`+
          "<i class='fa-solid fa-trash ml-24 text-red-600 w-5 h-5' onclick='delitem("+ (j++) +")'></i></div></div>" +
          "<div class='mt-4'><button class='dec' onclick='decr2(event)'>-</button>"+
          `<input class='inp' type='number' min='0' name='number1' onchange='totalprice()' value=${val}>`+
          "<button class='inc' onclick='inc2(event)'>+</button></div></div></div>"
           )
      }).join('');
    }
};
function delitem(a) {
    cart.splice(a,1);
    display();
    totalprice();
}
var btn1 = document.getElementsByClassName('btn1');
var btn2 = document.getElementsByClassName('btn2');
for(i=0;i<btn1.length;i++) {
    btn1[i].addEventListener("click",decr);
    btn2[i].addEventListener("click",inc);
}
function decr(event) {
    let x = event.target.parentElement.children[1].children[0].value;
    x--;
    event.target.parentElement.children[1].children[0].value=x;
}
function inc(event) {
    let y = event.target.parentElement.children[1].children[0].value;
    y++;
    event.target.parentElement.children[1].children[0].value=y;
}
function totalprice() {
    var cartboxes= document.getElementsByClassName("cartimage");
    var total=0;
    for(var i=0;i<cartboxes.length;i++) {
       var cartbox = cartboxes[i];
       var priceleme = cartbox.getElementsByClassName("price")[0];
       var quantity = cartbox.getElementsByClassName("inp")[0].value;
       var price= parseFloat(priceleme.innerText.replace("$",""));
       total = total + price*quantity;
       document.getElementById("total").innerText="$ "+ total+"";
    }
}

