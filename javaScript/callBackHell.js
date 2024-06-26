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

async function executeFunctions() {
    try {
      let result = await firstFunction(1);
      result = await secondFunction(result);
      result = await thirdFunction(result);
      console.log(result); // Output: 4
    } catch (err) {
      console.error(err);
    }
  }
  
  executeFunctions();
