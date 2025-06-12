const a = [3,4,[[[4,5]]],[7]];
// console.log(a.flat(3));
const b = [];

function flat1(arr){
    for(let i=0;i<arr.length;i++){
        if(!(Array.isArray(arr[i]))){
            b.push(arr[i]);
        }else{
            flat1(arr[i]);
        }
    }
    return b;
}

console.log(flat1(a),"result")

