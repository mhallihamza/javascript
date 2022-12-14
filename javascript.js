var btn=document.getElementsByClassName("remove");
btn[0].addEventListener("click", foo);
btn[2].addEventListener("click", foo);
var ele1=document.getElementsByClassName("firstele");
var parent = document.getElementById("parent");
function foo() {
    if(alert("Are you sure")===true);
    parent.removeChild(ele1[1]);
}
var number1 = document.getElementById("number1");
var number2 = document.getElementById("number2");
var mysomme1 = document.getElementById("somme1");
var mysomme2 = document.getElementById("somme2");
var contentnb1=0,contentnb2=0;
number1.onkeyup = function () {
    var contentnb1 = number1.value;
    var contentnb2 = number2.value;
    mysomme1.innerHTML=`$${contentnb1*(17.99)+contentnb2*(17.99)}`;
    mysomme2.innerHTML=`$${contentnb1*(17.99)+contentnb2*(17.99)}`;
}
number2.onkeyup = function () {
    var contentnb1 = number1.value;
    var contentnb2 = number2.value;
    mysomme1.innerHTML=`$${contentnb1*(17.99)+contentnb2*(17.99)}`;
    mysomme2.innerHTML=`$${contentnb1*(17.99)+contentnb2*(17.99)}`;

}
var boutton1 = document.getElementById("botn1");
var boutton2 = document.getElementById("botn2");
var boutton3 = document.getElementById("botn3");
var boutton4 = document.getElementById("botn4");

boutton1.onclick = function() {
    number1.value--; 
}
boutton2.onclick = function() {
    number1.value++ ;
}
boutton3.onclick = function() {
    number2.value--; 
}
boutton4.onclick = function() {
    number2.value++; 
}
var icone = document.getElementsByClassName("hurt");
var vsg1 = document.getElementById("link1");
var vsg2 = document.getElementById("link2");
console.log(vsg1,vsg2);
icone[0].onclick = function() {
    vsg1.setAttribute("class","fa-solid fa-heart absolute right-[50%] translate-x-2/4 bottom-2 text-green-600");
    alert('hi');
    vsg1.style.color="text-green-600";
    console.log(vsg1);
}
icone[1].onclick = function() {
    vsg2.setAttribute("class","fa-solid fa-heart absolute right-[50%] translate-x-2/4 bottom-2 text-green-600");
    alert("how")
    console.log(vsg2);
}
