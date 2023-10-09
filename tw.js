let a=document.getElementById("na");
let b=document.getElementById("em");
let btn=document.getElementById("btn");
btn.addEventListener("submit",show);
function show(e)
{ e.preventDefault();
    let aa=document.getElementById("na").value;
    let bb=document.getElementById("em").value;
    localStorage.setItem("name",aa);
    localStorage.setItem("email",bb);
    console.log(localStorage);
    console.log(localStorage);

}