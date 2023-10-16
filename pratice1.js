var form=document.getElementById("addForm")
var ul=document.querySelector("ul");
var fir=document.getElementById("filter");
fir.addEventListener('keyup',filter)
function filter(e)
{
   
   var text = e.target.value.toLowerCase();
  // Get lis
  var t = ul.getElementsByTagName('li');
  // Convert to an array
  Array.from(t).forEach(function(m){
    var itemName = m.firstChild.textContent;
    var dis=m.childNodes[1].textContent;
    if(itemName.toLowerCase().indexOf(text) != -1 ||dis.toLowerCase().indexOf(text)!=-1){
      m.style.display = 'block';
    } else {
      m.style.display = 'none';
    }
  });
}


form.addEventListener('submit',add)
ul.addEventListener('click',remo)
function remo(e)
{   if(e.target.classList.contains('delete'))
    {
        if(confirm('sure'))
        {
            var i=e.target.parentElement;
            ul.remove(i);
        }
    }

}
function add(e)
{  e.preventDefault();
    var input=document.querySelector("#item").value;
    var ina=document.querySelector("#may").value;
    var li=document.createElement("li");
    li.className="list-group-item";
    li.appendChild(document.createTextNode(input));
    li.appendChild(document.createTextNode(ina));
    console.log(li);
    
ul.appendChild(li);
var but=document.createElement("button")
but.className="btn btn-danger btn-sm float-right delete";
but.appendChild(document.createTextNode("X"));
li.appendChild(but);
var edit=document.createElement("button");
edit.appendChild(document.createTextNode("edit"));
li.appendChild(edit);
    


    

}

