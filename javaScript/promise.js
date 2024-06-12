const myPromise = new Promise((resolve, reject) => {
    // Asynchronous operation
    let success = false; // Change to false to simulate an error

    if (success) {
        resolve('Operation successful!');
    } else {
        reject('Operation failed!');
    }
})
myPromise.then((res)=>console.log(res)).catch((rej)=>console.log(rej))
