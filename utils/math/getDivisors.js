function getDivisors(n) {
  const result = [];

  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      result.push(i);

      if (i !== n / i) {
        result.push(n / i);
      }
    }
  }

  result.sort((a, b) => a - b);

  return result;
}

module.exports = { getDivisors };
