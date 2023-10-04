const decode = (input) => input
  .replace(/(\.|\-)(\d+)/g, (_, __, val) => val == 1 ? '.' : (val - 2) / 2)
  .match(/\d+\.\d+/g)
  .map(x => x.split('.'))
  .sort((a, b) => a[1] - b[1])
  .map(x => String.fromCharCode(x[0]))
  .join('');