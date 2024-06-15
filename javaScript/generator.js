function* myGenrator(){
    yield 1;
    yield 2;
    yield 3;
}
let gen = myGenrator()
console.log(gen.next().value)
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())


function* generator(){
    let count=0
    let number=0
    while(count<10){
        number+=2
        yield number
        count++
    }
}
let gen1 = generator()
console.log(gen1.next().value);
console.log(gen1.next().value);
console.log(gen1.next().value);
console.log(gen1.next().value);