function outerFunction() {
  let a = "outer";
  function innerFunction() {
    console.log(a);
    let b = "inner";
    console.log(b);
    // return b;
  }
  return innerFunction;
}
const innerval = outerFunction()()
// console.log(innerval)
