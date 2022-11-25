 let arr = [10,58,34,29,50,49,32];
 let n = arr.length;

 let highest = arr[0];
 let secondHighest = arr[0];

 for (let i = 0; i<n; i++){
    if (arr[i] > highest){
        secondHighest = highest;
        highest = arr[i];
    }
    else if (arr[i] > secondHighest && arr[i] != highest){
        secondHighest = arr[i];
    }
 }
 console.log(secondHighest);