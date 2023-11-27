function split(arr = [], num = 1) {
  if (arr.length === 0) {
    return arr;
  }

  return [arr.slice(0, num), ...split(arr.slice(num), num)];
}

module.exports = {
  split,
};
