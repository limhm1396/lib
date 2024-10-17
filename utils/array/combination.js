module.exports.combination = (list, k) => {
  const results = [];

  function calculate(start, result) {
    if (result.length === k) {
      results.push(result);
      return;
    }

    for (let i = start; i < list.length; i++) {
      calculate(i + 1, [...result, list[i]]);
    }
  }

  calculate(0, []);

  return results;
};
