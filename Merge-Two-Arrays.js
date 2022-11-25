let arr1 = [23,12,3,25,46,20,76];
let arr2 = [34,49,52,18,63];
let arr3 = [];

for (let i = 0; i<arr1.length; i++){
    arr3[i] = arr1[i];
}
for (let i = 0; i< arr2.length; i++){
    arr3[arr1.length+i] = arr2[i];
}
console.log(arr3);