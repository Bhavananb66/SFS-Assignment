const a =["#","&",1,2,"A",3,"B","!"];
// const b = [];
// for(let i=0;i<a.length;i++){
//     if(typeof a[i] === "number"){
//          b.push(a[i]);
//     }
// }

// console.log(b);

let bbb = a.filter((d)=>{
   return typeof d === "number";
})

console.log(bbb)