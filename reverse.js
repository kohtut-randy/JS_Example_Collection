function ReverseArray(arr){
    let reverse = [];

    for(i = arr.length - 1 ; i >= 0 ; i--){
        reverse.push(arr[i]);
    }
    return reverse;
}

const result = ReverseArray(Array);
console.log(result);