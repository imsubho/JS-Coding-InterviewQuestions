let arr = [10,8,34,29,50,49,32];

let n = arr.length;

for (let i = 0; i < n; i++){
    for (let j = 0; j< n; j++){
        if (arr[j] < arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
}
console.log(arr);