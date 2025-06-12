const array1 = ['.Datagrid1.Number8', '.Number4','Tab.text5'  ,'Table.Number7'];
const array2 = [];
// let array3 = array1.map((a)=>{
//     let splitted = a.split('.');
//     console.log("dsadkjsahdk",splitted)
//     return splitted.pop();
//     // array2.push(b);
//     // console.log(b,"b")
// })

// console.log(array3);

for(i=0;i<array1.length;i++){
    let splitted = array1[i].split(".");
    console.log(splitted,"sl")
    let last = splitted[splitted.length-1];
    array2.push(last);
}
console.log(array2);






