function combination(list, k) {
  if (k === 1) {
    return list.map((value) => [value]);
  }

  const result = [];

  list.forEach((head, idx, arr) => {
    const tail = arr.slice(idx + 1);
    const subCombination = combination(tail, k - 1);
    const mainComination = subCombination.map((value) => [head, ...value]);
    result.push(...mainComination);
  });

  return result;
}

module.exports = { combination };
