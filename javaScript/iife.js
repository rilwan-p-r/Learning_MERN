const iife=(function()  {
    let name='iife'
    console.log(`This is an ${name} using an arrow function!`);
})();
// console.log(typeof iife.name); // its show undefined because of iife variable are private
