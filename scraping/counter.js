module.exports = number => {
  let c;
  number < 1000
    ? number < 100
      ? number < 10
        ? (c = `00${number}`)
        : (c = `0${number}`)
      : (c = number)
    : (c = number);
  return c;
};
