function firstFunction(data) {
  return new Promise((res, rej) => {
    res(data+1);
  });
}
function secondFunction(data) {
    return new Promise((res,rej)=>{
        res(data+1)
    })
}
function thirdFunction(data) {
    return new Promise((res,rej)=>{
        res(data+1);
    })
}

// firstFunction(() => {
//   secondFunction(() => {
//     thirdFunction(() => {
//       console.log("callback completed");
//     });
//   });
// });
firstFunction(1).then((res)=>{
    return secondFunction(res)
})
.then((res)=>{
    return thirdFunction(res)
})
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
console.error(err)
})
