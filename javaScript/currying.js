function abc(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
let a = abc(1);
let b = abc(2);
console.log(b);

console.log(abc(1)(2)(3));
