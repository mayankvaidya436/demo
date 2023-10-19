console.log("person 1:show tickets");
console.log("person 2:show tickets");
const premoive= async()=>{
    const wife=new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(`tickets`),3000);
    
    })
    const getpopcorn=new Promise((resolve,reject)=> resolve(`popcorn`));
    const addbutter=new Promise((resolve,reject)=> resolve("butter"));
    const getcolddrinks=new Promise((resolve,reject)=>resolve("colddrinks"));
    let tickets=await wife;
    let[popcorn,butter,colddrinks]=await Promise.all([getpopcorn,addbutter,getcolddrinks]);
    console.log(`${popcorn},${butter},${colddrinks}`)
    /*console.log("wife:i have tickets");
    console.log(" husband:we should go in");
    console.log("wife:i am hungry");
    
    console.log(`husband:i got some ${popcorn}` );
    console.log(" husband:we should go in");
    console.log("wife:i need butter");
    
    console.log("husband: i got colddrinks");
    console.log("wife: ok thank you");
    */
    return tickets;
}
premoive().then((m)=>console.log(`person3:${m}`));
console.log("person 3:show tickets");
console.log("person 4:show tickets");