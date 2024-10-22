function combination(list, n) {
  if (n === 1) {
    return list.map((num) => [num]);
  }

  return list.reduce((result, head, idx, arr) => {
    const tail = arr.slice(idx + 1);
    const subCombination = combination(tail, n - 1);
    const mainCombination = subCombination.map((numArr) => [head, ...numArr]);
    result.push(...mainCombination);
    return result;
  }, []);
}

module.exports = { combination };
