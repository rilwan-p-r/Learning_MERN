const myPromise = new Promise((resolve, reject) => {
    // Asynchronous operation
    let success = true; // Change to false to simulate an error

    if (success) {
        resolve('Operation successful!');
    } else {
        reject('Operation failed!');
    }
});
