const form=document.getElementById("forms");
var ul=document.getElementById("list");
form.addEventListener("submit",add);
function add(e){
    e.preventDefault();
    console.log("hello");
    let a=document.getElementById("Amount").value;
    let b=document.getElementById("desc").value;
    let c=document.getElementById("Category").value;
    const obj={
       a:a,
       b:b,
       c:c
    }; 
    console.log(obj);
    //localStorage.setItem("data",JSON.stringify(obj));
    axios.post("https://crudcrud.com/api/98acac57cfe149b99fc6c37725cc53d5/mayank",obj)
    .then((response)=>{
    
        console.log(response)  
      })
      .catch((error)=>{
        document.body.innerHTML= document.body.innerHTML+"<h1>eroor<h1>"
        console.log(error)
      })
      axios.get("https://crudcrud.com/api/98acac57cfe149b99fc6c37725cc53d5/mayank")
      .then((response)=>{
        console.log(response);
        for(var i=0;i<response.data.length;i++)
        {
            show(response.data[i]);
        }
      })
      .catch((error)=>{
        console.log(error);
      })
      
    show(obj);
}
function show(obj){
    
    var li=document.createElement("li");
    li.textContent=obj.a+"-"+obj.b+"-"+obj.c;
    document.body.appendChild(li);
    var btn=document.createElement("button");
    btn.textContent="Delete";
    li.appendChild(btn);
    var edit=document.createElement("button");
    edit.textContent="edit";
    li.appendChild(edit);
    btn.onclick=()=>{
      axios.delete("https://crudcrud.com/api/98acac57cfe149b99fc6c37725cc53d5/mayank/obj")
      .then((response)=>{
        console.log(response);
      })
      .catch((error)=>{
        console.log(error);
      })
      
        //document.body.removeChild(li);
    }
}

