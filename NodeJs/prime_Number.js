function prime(n){
if( n === 1 ){
    return false;
}
else if( n === 2 ){
    return true;
}
else{
    for( x=2; x<n; x++ ){
        if(n%x === 0){
            o = true;
        }
    }
    if(!o){
        console.log("prime number");
    }
    else{
        console.log("not prime number");
    }
}
}
n = 37;
o = false;
prime(n);