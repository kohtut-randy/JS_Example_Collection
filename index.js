
//function totalRelease(numberofParent,isMarried,numberofChild){
//    if(numberofParent==2){
//        numberofParent=200000
//    }else if(numberofParent==1){
//        numberofParent=100000
//    }else{
//        numberofParent=0
//    }
//    if(isMarried==true){
//        isMarried=100000
//    }else{
//        isMarried=0
//        numberofChild=0
//    }
//    return numberofParent+isMarried+(numberofChild*50000)
//}
//let release= totalRelease(1,false,2)
//console.log(release);

//function toTax(yIncome){
//    function totalRelease(numberofParent,isMarried,numberofChild){
//        if(numberofParent==2){
//            numberofParent=2000000
//        }else if(numberofParent==1){
//            numberofParent=1000000
//        }else{
//            numberofParent=0
//        }
//        if(isMarried==true){
//            isMarried=1000000
//        }else{
//            isMarried=0
//            numberofChild=0
//        }
//        return numberofParent+isMarried+(numberofChild*500000)
//    }
//
//    let release= totalRelease(2,true,2);
//    if(yIncome>30000000){
//        return (yIncome-release)*25/100
//    }else if(yIncome<30000000 && yIncome>20000000){
//        return (yIncome-release)*20/100
//    }else if(yIncome<20000000 && yIncome> 10000000){
//        return (yIncome-release)*15/100
//    }else if(yIncome<10000000 && yIncome> 5000000){
//        return (yIncome-release)*10/100
//    }
//    else if(yIncome<5000000 && yIncome> 2000000){
//        return (yIncome-release)*5/100
//    }
//    else{
//        return yIncome
//    }
//}
//let res=toTax(2000000);
//console.log(res);


//if(yIncome>2000000 && yIncome<5000000){
//    return (yIncome-release)*5/100
//}else if(yIncome>5000000 && yIncome<10000000){
//    return (yIncome-release)*10/100
//}else if(yIncome>10000000 && yIncome<20000000){
//    return (yIncome-release)*15/100
//}else if(yIncome>20000000 && yIncome<30000000){
//    return (yIncome-release)*20/100
//}else if(yIncome>30000000){
//    return (yIncome-release)*25/100
//}else{
//    return yIncome
//}


function calcPercentage(amount,percent){
    return (amount*percent)/100
}
//let x= calcPercentage(700000,20);
//console.log(x);


function selfRelease(amount){
    const percentRelease =20;
    return calcPercentage(amount,percentRelease);
}

function parentalelease(noOfParent){
    if(noOfParent<= 2){
        return noOfParent *1000000;
    }else{
        return new Error("parent should be less than or equal 2")
    }
}

function marriedRelease(isMarried,noOfChild){
    if(isMarried==true){
        let result =0;
        result = result+1000000;
        result = result+(noOfChild*500000);
        return result;
    }else{
        return 0;
    }
}

function totalRelease(yIncome,noOfParent,isMarried,noOfChild){
    const self= selfRelease(yIncome);
    const parental =parentalelease(noOfParent);
    const married =marriedRelease(isMarried,noOfChild);
    const SSB =72000;
    console.log(self);
    console.log(parental);
    console.log(married);
    return self+parental+married+SSB;
}

const yIncome=7000000;
const Total= totalRelease(yIncome,2,true,1)
console.log("Total  "+Total);

function toTax(yIncome,Total){
    return yIncome-Total;
}
const taxAmount= toTax(yIncome,Total)
console.log(taxAmount);

function taxPercentage(taxAmount){
    if(taxAmount>0 && taxAmount<2000000){
        return taxAmount
    }else if(taxAmount>2000000 && taxAmount<5000000){
        return (taxAmount)*5/100
    }else if(taxAmount>5000000 && taxAmount<10000000){
        return (taxAmount)*10/100
    }else if(taxAmount>10000000 && taxAmount<20000000){
        return (taxAmount)*15/100
    }else if(taxAmount>20000000 && taxAmount<30000000){
        return (yIncome-release)*20/100
    }else{
        return (taxAmount)*25/100
    }
    
}
let finalTax =taxPercentage(taxAmount);
console.log("finalTax  "+finalTax);


