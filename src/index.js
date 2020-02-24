module.exports = function reverse (n) {
  if(n<0) n=-n;
  let number = n.toString().split('');
  number.reverse();
  return +number.join('');
}
