let arr = [14, 5, 9, 21, 16, 29, 11, 2];

let n = 11;
let newArr = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > n) {
    newArr.push(arr[i]);
  }
}
console.log(newArr);
