class trieNode{
    constructor(){
        this.children ={}
        this.isWordEnd=false
    }
}
class trie{
    constructor(){
        this.root=new trieNode()
    }
    insert(value){
        let node =this.root
        for(let char of value){
            if(!node.children[char]){
                node.children[char]=new trieNode()
            }
            node = node.children[char]
        }
        node.isWordEnd=true;
    }
    search(value){
        let node = this.root
        for(let char of value){
            if(!node.children[char]){
                return false
            }else{
                node=node.children[char]
            }
        }
        return true
    }

    prefixRec(value){
        let node=this.root
        for(let char of value){
            if(!node.children[char]){
                return []
            }else{
                node=node.children[char]
            }
        }
        return this.getAllWords(node,value)
    }
    getAllWords(node,value){
        let words=[]
        if(node.isWordEnd){
            words.push(value)
        }
        for(let char in node.children){
            let childNode= node.children[char]
            let prefix = value+char
            words=words.concat(this.getAllWords(childNode,prefix))
        }
        return words
    }
}
let triess =new trie()
triess.insert('apple')
triess.insert('apples')
triess.insert('applesss')
console.log(triess.search('apple'))
console.log(triess.prefixRec('appl'))