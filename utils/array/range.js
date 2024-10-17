function range(start, end, step = 1) {
  return Array.from(
    { length: (end - start) / step + 1 },
    (_v, i) => start + i * step
  );
}

module.exports = { range };
