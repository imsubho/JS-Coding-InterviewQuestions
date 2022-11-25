let arr = [10,8,34,29,50,49,32];
let n = arr.length;

let smallest = arr[0];

for (let i = 0; i<n; i++){
    if (arr[i] < smallest){
        smallest = arr[i];
    }
}
console.log(smallest);