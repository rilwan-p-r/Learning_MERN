
// const myPromise = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         let succes=true
//         if(succes){
//             res('task completed')
//         }else{
//             res('task not completed')
//         }
//     },2000)

// })
// myPromise.then((res)=>{
//     console.log(res);
// }).catch((rej)=>{
//     console.log(rej);
// })

const myPromise1= new Promise((res,rej)=>setTimeout(res,2000,'one'))
const myPromise2= new Promise((res,rej)=>setTimeout(res,1000,'two'))
const myPromise3= new Promise((res,rej)=>setTimeout(res,3000,'three'))

// waiting for all resolve
Promise.all([myPromise1,myPromise2,myPromise3]).then((res)=>{
    console.log(res);
}).catch((rej)=>{
    console.log(rej);
})

// Promise.race([myPromise1,myPromise2,myPromise3]).then((res)=>{
//     console.log(res);
// }).catch((rej)=>{
//     console.log(rej);
// })

// Promise.any([myPromise1,myPromise2,myPromise3]).then((res)=>{
//     console.log(res);
// }).catch((rej)=>{
//     console.log(rej);
// })

// Promise.allSettled([myPromise1,myPromise2,myPromise3]).then((res)=>{
//     console.log(res);
// }).catch((rej)=>{
//     console.log(rej);
// })
