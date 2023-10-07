var forms=document.getElementById("addForm");
var list=document.getElementById('items');
  forms.addEventListener("submit",add);
  list.addEventListener("click",abc);
  function abc(e){
    if(e.target.classList.contains('delete'))
    {
        if(confirm('Are You Sure?')){
            var li = e.target.parentElement;
             list.removeChild(li);
          }
    }
  }
  function add(e){
    e.preventDefault();
    var item=document.getElementById("items").value;

    var li=document.createElement("li");
    li.className="list-group-item";
    li.appendChild(document.createTextNode(item));
    list.appendChild(li);
    var deletebtn=document.createElement("button");
    deletebtn.className="btn btn-danger btn-sm float-right delete";
    deletebtn.appendChild(document.createTextNode("X"));
    li.appendChild(deletebtn);
    var edit=document.createElement("button");
    edit.appendChild(document.createTextNode(item));
    list.appendChild(edit);

       
       

    
  }
  