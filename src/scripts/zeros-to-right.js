

module.exports = function (values) {
  return values.reduce((acc, value) => {
    if (value === 0) {
      acc.push(0);
      return acc;
    }

    acc.splice(acc.indexOf(0), 0, value);
    return acc;
  }, []);
};
