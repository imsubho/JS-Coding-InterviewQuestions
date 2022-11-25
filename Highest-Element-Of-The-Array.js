let arr = [10,8,34,29,50,49,32];
let n = arr.length;

let highest = arr[0];

for (let i = 0; i< n; i++){
    if (arr[i] > highest){
        highest = arr[i];
    }
}
console.log(highest);