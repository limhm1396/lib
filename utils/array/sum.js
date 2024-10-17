function sum(list) {
  return list.reduce((acc, value) => acc + value, 0);
}

module.exports = { sum };
