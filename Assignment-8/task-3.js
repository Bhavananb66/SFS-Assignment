// Find third largest
const a = [1,6,9,3,4];
console.log(typeof a)
function thirdlargest(arr){
    let first = -Infinity;
    let second = -Infinity; 
    let third = -Infinity;

    for(let n of arr){
        if(n > first){
            [third,second,first] = [second,first,n];
        }else if(n> second && n !== first){
            [third,second] = [second,n];
        }else if((n >third) && (n !== second) && (n !== first)){
            third = n;
        }
        }
        return second
    
}

console.log(thirdlargest(a));



