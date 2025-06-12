// Quick Sort

const a = [6,25,4,91,21,64];

function quickSort(arr){
    if(arr.length <= 1){
        return arr;
    }
    let pivot = arr[0];
    const left = [];
    const right = [];

    for (let i=1;i<arr.length;i++){
        if(arr[i] < pivot){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)];

}

console.log(quickSort(a)[a.length-3]);