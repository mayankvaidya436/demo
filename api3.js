const form=document.getElementById("forms");
const food=document.getElementById("Food");
const electro=document.getElementById("electronics");
const skin=document.getElementById("skincare");  
form.addEventListener("submit" ,data);

function data(event)
{
    event.preventDefault();
    const price=document.getElementById("price").value;
    //const products=document.getElementById("product").value;
    const product=event.target.name.value;
    const category=document.getElementById("category").value;
    const obj={
        price,
        product,
        category,
        id:null
    }
    axios.post("https://crudcrud.com/api/112cb483127b4692a244bbc539f288ca/product",{
        price:obj.price,
        product:obj.product,
        category:obj.category,
        id:null
    })
    .then((Response)=>{
        
        obj.id=Response.data._id;
        show(Response.data);
        console.log(Response._id);
    })
    .catch((error)=>{
        console.log(error);
    })

    show(obj);

}
window.addEventListener("DOMContentLoaded",()=>{
    axios.get("https://crudcrud.com/api/112cb483127b4692a244bbc539f288ca/product")
    .then((Response)=>{
          const obj=Response.data;
          obj.forEach(element => {
              obj.id=element._id
              show(obj);
          });

       // console.log(Response);
        //for(var i=0;i<Response.data.length;i++)
        //{
         //   show(Response.data[i]);
        //}
    })
    .catch((error)=>{
        console.log(error)
    })

})

function show(obj)
{   
    
   
     const li=document.createElement("li");
     const btn=document.createElement("button");
     btn.textContent="Delete order";
     
     
      if(obj.category=="Food")
      {
        li.textContent=obj.price+"-"+obj.product+"-"+obj.category;
        food.appendChild(li);
        li.appendChild(btn);
      }
      if(obj.category=="electronics")
      {
        li.textContent=obj.price+"-"+obj.product+"-"+obj.category;
        electro.appendChild(li);
        li.appendChild(btn);
      }
      if(obj.category=="skincare")
      {
        li.textContent=obj.price+"-"+obj.product+"-"+obj.category;
        skin.appendChild(li);
        li.appendChild(btn);
      }
      btn.onclick=()=>{
         
         axios.delete('https://crudcrud.com/api/112cb483127b4692a244bbc539f288ca/product/')
         .then((Response)=>{
            food.removeChild(li);
            console.log(Response);
         })
         .catch((error)=>{
            console.log(error);
         })
      }

}
