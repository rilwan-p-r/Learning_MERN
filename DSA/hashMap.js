class hashMap{
    constructor(size){
        this.table= new Array(size)
        this.size=size
    }
    hash(key){
        let total=0
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i)
        }
        return this.size % total
    }
    set(key,value){
        let index = this.hash(key)
        let bucket = this.table[index]
        if(!bucket){
            this.table[index] = [[key,value]]
        }else{
            let sameKeyArr = bucket.find(item=>item[0]===key)
            if(sameKeyArr){
                sameKeyArr[1]=value
            }else{
                bucket.push([key,value])
            }
        }
    }
    get(key){
        let index=this.hash(key)
        let bucket=this.table[index]
        if(bucket){
            let samekeyArr = bucket.find(item=>item[0]===key)
            return samekeyArr[1]
        }
    }
    remove(key){
        let index=this.hash(key)
        let bucket = this.table[index]
        if(bucket){
            let sameKeyArr = bucket.find(item=>item[0]===key)
            bucket.splice(bucket.indexOf(sameKeyArr),1)
        }
    }

    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i])console.log(i,this.table[i])
            
        }
    }
}
let hashy = new hashMap(50)
hashy.set('name','rilwan')
hashy.set('amen','saud')
hashy.display()
console.log(hashy.get('amen'));
hashy.remove('amen')
hashy.display()