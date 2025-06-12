const array1 = ['.Datagrid1.Number8', '.Number4','Tab.text5'  ,'Table.Number7'];
const array2 = {};


for(i=0;i<array1.length;i++){
    let splitted = array1[i].split(".");
    console.log(splitted,"splitted")
        for(let i=0;i<splitted.length;i++){
             if(!(splitted[i] === "")){
                 array2[splitted[i]] = splitted[i];
        }
        }
    }

console.log(array2);






