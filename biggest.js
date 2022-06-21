
let Array = [1,3,2,6,9,1,100,122,122,100,3];

function FindBiggestNumber(arr){
    let biggest =0;
    let secBiggest=-1

    for(var i = 0; i<arr.length; i++){
        if(biggest < arr[i]){
            biggest = arr[i];
        }else if(arr[i]>secBiggest && arr[i]<biggest){
            secBiggest =arr[i];
        }
        
    }
    console.log("Biggest Number is " + biggest);
    console.log("secBiggest Number is " + secBiggest);
    
}

const BiggestNumber = FindBiggestNumber(Array);
