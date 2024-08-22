module.exports = function reverse (n) {
  let str = n.toString();
  let reversedStr = str.split('').reverse().join('');
  return parseInt(reversedStr, 10);
}
