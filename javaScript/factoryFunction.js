function factory (name,age){
    return {
        name:name,
        age:age,
        getInfo(){
            console.log(`my name ${this.name} my age ${this.age}`)
        }
    }
}
let a=factory('rilwan',22)
a.getInfo()