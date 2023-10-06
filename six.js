var a=document.querySelector(".list-group-item:nth-child(2)");
a.style.backgroundColor="green";
var c=document.querySelector(".list-group-item:nth-child(3)");
c.style.visibility="hidden";

var b=document.querySelectorAll('li');
b[1].style.color='green';
var d=document.querySelectorAll(".list-group-item:nth-child(odd)")
for (let index = 0; index < d.length; index++) {
    d[index].style.backgroundColor="green";
    
}