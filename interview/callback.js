function cb1(a, b) {
  const sum = a + b;
  return function cb2(sum) {
    let res = sum * 2;
    return function cb3(res) {
      console.log(res);
    };
  };
}
const myPromiseFunction = () => {
  const result = new Promise(resolve, reject);
};
console.log("hello");
