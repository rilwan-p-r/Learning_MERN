class person{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    get(){
        return ` helo my name is ${this.name} and i'm just ${this.age} years old`
    }
}
const prDetails=new person('rilwan',22)
console.log(prDetails.get())