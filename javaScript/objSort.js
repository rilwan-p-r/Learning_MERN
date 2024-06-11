let obj =[{
    a:4,
},{
    b:3
},
{
    a:1
},{
    v:8
},{
    s:7
}

]
// let sortedArr=Object.entries(obj).sort((a,b)=>a[1]-b[1])
// let sortedObj=Object.fromEntries(sortedArr)
// console.log(sortedObj);          

obj.sort((a,b)=>{
    let aValues=Object.values(a)
    let bValues=Object.values(b)

    return aValues-bValues  
})
console.log(obj)