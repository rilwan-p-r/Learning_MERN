function* myGenrator(){
    yield 1;
    yield 2;
    yield 3;
}
let gen = myGenrator()
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())