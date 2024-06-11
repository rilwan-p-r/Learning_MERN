class stack{
    constructor(){
        this.stack=[]
    }
    push(element){
        this.stack.push(element)
    }
    isEmpty(){
        return this.size()===0
    }
    pop(){
        return this.stack.pop()
    }
    peek(){
        return this.stack[this.size()-1]
    }

    size(){
        return this.stack.length
    }
}
let stacky = new stack()

console.log(stacky.isEmpty());
stacky.push(5)
stacky.push(6)
stacky.push(7)
stacky.push(8)
console.log(stacky.isEmpty());
stacky.pop()
console.log(stacky.peek());