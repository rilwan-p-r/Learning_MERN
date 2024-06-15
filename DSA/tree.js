class Node{
    constructor(value){
        this.value=value
        this.right=null
        this.left=null
    }
}

class binaryTree{
    constructor(){
        this.root=null
    }
    insert(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.root=node
        }else{
            this.insertNode(this.root,node)
        }
    }
    insertNode(root,node){
        if(node.value<root.value){
            if(root.left===null){
                root.left=node
            }else{
                this.insertNode(root.left,node)
        }
        }else{
            if(root.right===null){
                root.right=node
            }else{
                this.insertNode(root.right,node)
            }
        }
    }
isEmpty(){
    return this.root===null
}
inorder(root){
    if(root){
        this.inorder(root.left)
        console.log(root.value);
        this.inorder(root.right)
    }
}
search(root,value){
    if(!root){
        return false
    }else{
        if(root.value===value){
            return true
        }else if(value<root.value){
           return this.search(root.left,value)
        }
        else{
          return this.search(root.right,value)
        }
    }
}
min(root){
    if(!root.left){
        return root.value
    }else{
        return this.min(root.left)
    }
}
}
let tree=new binaryTree()
tree.insert(2)
tree.insert(5)
tree.insert(3)
tree.insert(1)
tree.insert(4)
tree.inorder(tree.root)
console.log(tree.search(tree.root,9))
console.log(tree.min(tree.root))
