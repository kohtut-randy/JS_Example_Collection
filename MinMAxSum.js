function miniMaxSum(arr){
    let min = arr[0];
    let max = arr[0];
    let sum = 0;
    for(let i=0 ; i<arr.length ;i++){
        if(max <arr[i]){
            max = arr[i];
            //console.log(max);
        }
        if(min > arr[i]){
            min = arr[i];
            console.log(min);
        }
        sum = sum+arr[i];
        //console.log(sum);
    }
    let minSum = sum - max;
    let maxSum = sum - min;
    return minSum+""+maxSum;
}
console.log(miniMaxSum([1,3,5,7,9]))

