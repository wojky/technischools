// funkcje

function sum(a = 100, ...rest) {
  console.log(arguments);
  return () => 8342;
}

const sumAleStrzalkowe = (a, b, ...rest) => {
  console.log(rest);
  return a + b;
};

console.log(sum(100, 200, 300));

console.log(sumAleStrzalkowe(100, 200, 300, 400, 500));

isNaN();

console.log(typeof NaN);
