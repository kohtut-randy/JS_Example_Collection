function catsAndmouse (x,y,z){
    let a= Math.abs(x-z);
    let b =Math.abs(y-z);
    if(a>b){
        return "Cat B"
    }else if(b>a){
        return "Cat A"
    }else{
        return "mouseC"
    }
}
console.log(catsAndmouse(2,4,5));