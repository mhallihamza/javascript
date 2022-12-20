let addcart= document.getElementsByClassName("addcart");
for(let i=0;i<addcart.length;i++) {
    addcart[i].addEventListener("click" ,addtocart);
}
var additemid =0;
    function addtocart(e) {
        additemid += 1;
        var newDiv = document.createElement('div');
        var newDiv1 = document.createElement('div');
        var newDiv3 = document.createElement('div');
        var newDiv4 = document.createElement('div');
        var newDiv5 = document.createElement('div');
        newDiv.setAttribute("class","cartimage");
        newDiv.setAttribute("id",additemid);
        newDiv3.setAttribute("class","flex w-[14rem] mt-4");
        newDiv4.setAttribute("class","flex");
        var img = document.createElement('img');
        var title = document.createElement('div');
        var color = document.createElement('div');
        var size = document.createElement('div');
        var dec = document.createElement('button');
        var inp = document.createElement('input');
        var inc = document.createElement('button');
        var supp = document.createElement('button');
        var prix = document.createElement('div');
        img.setAttribute('src',e.target.parentElement.parentElement.children[0].children[0].currentSrc);
        title.setAttribute("class","title");
        color.setAttribute("class","color");
        size.setAttribute("class","color");
        dec.setAttribute("class","dec");
        inp.setAttribute("type","number");
        inp.setAttribute("class","inp")
        inc.setAttribute("class","inc");
        supp.setAttribute("class","supp");
        supp.setAttribute("onclick","del(event)");
        dec.setAttribute("onclick","decre(event)");
        inc.setAttribute("onclick","incr(event)");
        prix.setAttribute("class","mt-7 ml-4 font-medium text-lg");
        supp.innerText="remove";
        title.innerText=e.target.parentElement.parentElement.children[1].children[0].innerText ;
        color.innerText=e.target.parentElement.parentElement.children[1].children[1].innerText;
        size.innerText=e.target.parentElement.parentElement.children[1].children[2].innerText;
        dec.innerText="-";
        inc.innerText="+";
        inp.value= e.target.parentElement.parentElement.children[3].children[1].children[0].value;
        prix.innerText=`$${inp.value*(17.5)}`
        var cartitems = document.getElementById('main');
        newDiv3.append(dec,inp,inc);
        newDiv.append(img);
        newDiv1.append(title,color,size);
        newDiv4.append(newDiv1,prix,supp);
        newDiv5.append(newDiv4,newDiv3);
        newDiv.append(newDiv5);
        cartitems.append(newDiv);

    }
    function del(event) {
        var supp =event.target.parentElement.parentElement.parentElement;
        console.log(supp);
        supp.remove();
    }
    let btn1 = document.getElementsByClassName("btn1");
    let btn2 = document.getElementsByClassName("btn2");
    for(let i=0;i<btn1.length;i++) {
        btn1[i].addEventListener("click" ,decre);
    }
    for(let i=0;i<btn1.length;i++) {
        btn2[i].addEventListener("click" ,incr);
    } 
    var stock = [10,10,10,10];
    function decre(e) {
        if(e.target.parentElement.parentElement.parentElement.parentElement.id=="main") {
            let x=e.target.parentElement.children[1].value;
            if(x>0) { 
                x--; 
                e.target.parentElement.children[1].value=x;
            }
            else x=0;
            let y=e.target.parentElement.parentElement.children[0].children[1];
            y.innerText=`$${x*(17.5)}`;
        }
       let x= e.target.parentElement.parentElement.children[3].children[1].children[0].value;
       let stockcont = e.target.parentElement.parentElement.children[3].children[4];
       if(x>0) {
       x--;
       var parent= e.target.parentElement.parentElement;
       stock[parent.id]++;
       stockcont.innerText=`${stock[parent.id]} in stock `;
       e.target.parentElement.parentElement.children[3].children[1].children[0].value=x;
    }
    else x=0;

    }
    function incr(e) {
        if(e.target.parentElement.parentElement.parentElement.parentElement.id=="main") {
            let x=e.target.parentElement.children[1].value;
            x++;
            e.target.parentElement.children[1].value=x;
            let y=e.target.parentElement.parentElement.children[0].children[1];
            y.innerText=`$${x*(17.5)}`;

        }
        let x= e.target.parentElement.parentElement.children[3].children[1].children[0].value;
        let stockcont = e.target.parentElement.parentElement.children[3].children[4];
        x++;
        var parent= e.target.parentElement.parentElement;
        if(stock[parent.id]>0){
        stock[parent.id]--;
        stockcont.innerText=`${stock[parent.id]} in stock `;
              }
        else {
            stockcont.innerText="out of the stock";
            stockcont.setAttribute("class","text-red-500"); 
        }
        e.target.parentElement.parentElement.children[3].children[1].children[0].value=x;
    }





