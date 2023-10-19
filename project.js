const button=document.getElementById("but");
button.addEventListener("click",abc);
function abc(e){
    e.preventDefault();
    var a=e.target.username.value;
    var b=e.target.des.value;
    var c=e.target.cat.value;
    const obj={
        a:usename,
        b:des,
        c:cat
    }
    localStorage.setItem("data",JSON.stringify(obj));
    show(obj);
}
function show(obj)
{ 
  var ul=document.getElementById("list");
  var li= document.createElement("li");
  li.textContent=obj.a+"-"+obj.b+"-"+obj.c;
  ul.appendChild(li)
  var btn=document.createElement("button");
  btn.textContent="delete expencise";
  li.appendChild(btn);
  btn.onclick=()=>{
    e.removechild(li);
  }
  var edit=document.createElement("button")
  edit.textContent="edit expensies";
  edit.onclick=()=>{
    e.removechild(li);
  }

}