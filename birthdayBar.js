let choArray =[1,2,3,4,6,7,8];
function birthdayBar(arr){
    let pairCount =0;

    for(let i=0;i<arr.length;i++){
        for(let j=i++;j<arr.length;j++){
            if((arr[i]+arr[j])==4){
                pairCount=pairCount+1;
            }
        }
        return pairCount;
    }
    
   

}
const result = birthdayBar(choArray,4);
console.log(result);