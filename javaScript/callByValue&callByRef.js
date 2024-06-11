// call by reference
function changeObject(obj){
    // obj.name='shamis'
    obj={name:'uvais'}
    console.log(obj)
}
const obj={
    name:'rilwan'
}
changeObject(obj)
console.log('RR',obj)

// call by value
function increment(num){
    num++
    console.log(num);
}
const num = 5
increment(num)
console.log(num)