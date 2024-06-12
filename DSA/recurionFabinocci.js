function recursionFabnocci(n){
    if(n<=1){
        return n
    }
    return recursionFabnocci(n-1)+recursionFabnocci(n-2)
}
console.log(recursionFabnocci(7)); 