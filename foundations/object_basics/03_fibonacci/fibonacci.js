const fibonacci = function (num) {
  let fibonacciSequence = [1];
  if (typeof num !== "number" || num <= 0 || Number.isNaN(num)) {
    return "OOPS";
  }
  for (let i = 1; i <= num; i++) {
    if (fibonacciSequence.length === 1) {
      fibonacciSequence.push(1);
    } else {
      fibonacciSequence.push(
        fibonacciSequence[i - 2] + fibonacciSequence[i - 1],
      );
    }
  }
  console.log(fibonacciSequence);
  return fibonacciSequence[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
