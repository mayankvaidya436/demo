/*var items=document.querySelector("#items");
console.log(items.parentNode);
items.parentNode.style.backgroundColor='pink';*/
var items=document.querySelector("#items");
//console.log(items.parentElement);
//items.parentElement.style.backgroundColor='pink';
//console.log(items.childNodes)
console.log(items.children);
items.children[1].style.backgroundColor="red";
items.firstElementChild.style.backgroundColor="yellow";
items.lastElementChild.textContent="mayank";
console.log(items.nextElementSibling);
console.log(items.previousSibling);
console.log(items.previousElementSibling);
items.previousElementSibling.style.backgroundColor="red";

var div=document.createElement("div")
console.log(div);
div.className="hyhy";
div.id="SAF";
div.setAttribute('ada',"daf");
var divtext=document.createTextNode("maybak");
div.appendChild(divtext);
var container=document.querySelector('header .container');
var h=document.querySelector('Header h');
container.insertBefore(div,h);
div.style.fontSize="40px";