/*var a=document.getElementsByClassName("list-group-item");
console.log(a);
a[2].style.backgroundColor="green";
for (let index = 0; index < a.length; index++) {
    a[index].style.fontWeight="bold";
    
} 
var b=document.getElementsByClassName("title");
b[0].style.fontWeight="bold";
b[0].style.Color="green";
var ul=document.getElementsByTagName("ul");
var li=document.createElement("li");
li.className="list-group-item";
a[1].style.backgroundColor="green";
a[2].style.display="none";
var l=document.querySelectorAll("li");
l.style.backgroundColor="green";
var odd=document.querySelectorAll(".list-group-item:nth-child(odd)");
for (let index = 0; index < odd.length; index++) {
      odd[index].style.backgroundColor="#f4f4f4";
    
var p=document.querySelector(".title")
console.log(p.parentElement);
p.parentNode.style.backgroundColor="green";
let c=document.querySelector("ul");
console.log(c.children);
c.children[2].style.backgroundColor="red";
console.log(c.firstChild);
c.firstElementChild.style.backgroundColor="yellow";
console.log(c.firstElementChild)
c.lastElementChild.textContent="hello";
console.log(c.lastChild); 
console.log(c.previousElementSibling);*/
var ab=document.createElement("li");
ab.className="items";

 var b=document.createTextNode("hello");
ab.appendChild(b);
console.log(ab);
var h=document.querySelector("li");
var m=document.querySelector("ul");
h.appendChild(ab);
m.insertBefore(ab,h);